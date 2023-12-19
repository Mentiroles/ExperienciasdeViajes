import express from "express";
import jwt from "jsonwebtoken";
import { wrapWithCatch } from "../utils/wrap-with-catch.js";
import { sendOK } from "../utils/response.js";
import { db } from "../database/db-connection.js";
import {
  validateUserLoginPayload,
  validateRegisterPayload,
  validateAddPhotoPayload,
} from "../validations/auth-validations.js";
import fileUpload from "express-fileupload";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { PHOTOS_DIR, SERVER_HOST } from "../../constants.js";
import { sendOKCreated } from "../utils/response.js";
import bcrypt from "bcrypt";
import { authMiddleware } from "../middlewares/auth.js";
import { loggedInGuard } from "../middlewares/logged-in-guard.js";

const router = express.Router();

//! RUTA REGISTRO

router.post(
  "/register",
  wrapWithCatch(async (req, res) => {
    const { email, hashedPassword, nickName } = await validateRegisterPayload(
      req.body
    );

    await db.execute(
      `INSERT INTO users(email, password, nickName) 
        VALUES(?,?,?)`,
      [email, hashedPassword, nickName]
    );

    sendOK(res);
  })
);

//! RUTA LOGIN

router.post(
  "/login",
  wrapWithCatch(async (req, res) => {
    const { user } = await validateUserLoginPayload(req.body);

    const token = jwt.sign(
      {
        id: user.id,
        nickName: user.nickName,
      },
      process.env.SECRET,
      {
        expiresIn: "7d",
      }
    );

    sendOK(res, {
      token,
    });
  })
);

//! RUTA AGREGAR FOTO, Y CAMBIARLA

const fileParser = fileUpload();
router.post(
  "/users/:id/photo",
  fileParser,
  authMiddleware,
  loggedInGuard,
  wrapWithCatch(async (req, res) => {
    const { photo } = await validateAddPhotoPayload({
      photo: req.files?.photo,
      recommendationId: req.params.recommendationId,
    });

    const id = req.currentUser.id;

    await fs.mkdir(PHOTOS_DIR, { recursive: true });

    const fileExtension = path.extname(photo.name);
    const randomFileName = crypto.randomUUID();
    const newFilePath = `${randomFileName}${fileExtension}`;
    await photo.mv(path.join(PHOTOS_DIR, newFilePath));

    const URL = `photos/${newFilePath}`;

    const [{ updatePhoto }] = await db.execute(
      `UPDATE users SET photo = ? WHERE id = ?`,
      [URL, id]
    );

    sendOKCreated(res, updatePhoto);
  })
);

//! CAMBIAR PERFIL DE USUARIO

router.patch(
  "/users/:id",
  authMiddleware,
  loggedInGuard,
  wrapWithCatch(async (req, res) => {
    const id = req.params.id;
    const { nickname, email, password, photo } = req.body;

    if (nickname) {
      await db.execute(`UPDATE users SET nickname = ? WHERE id = ?`, [
        nickname,
        id,
      ]);
    }

    if (email) {
      await db.execute(`UPDATE users SET email = ? WHERE id = ?`, [email, id]);
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 12);
      await db.execute(`UPDATE users SET password = ? WHERE id = ?`, [
        hashedPassword,
        id,
      ]);
    }

    sendOK(res, { message: "User updated successfully" });
  })
);

export default router;
