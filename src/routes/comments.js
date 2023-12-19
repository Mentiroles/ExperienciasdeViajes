import express from "express";
import { wrapWithCatch } from "../utils/wrap-with-catch.js";
import { sendOK, sendOKCreated } from "../utils/response.js";
import { db } from "../database/db-connection.js";
import { validateCreateCommentPayload } from "../validations/comment-validations.js";
import { loggedInGuard } from "../middlewares/logged-in-guard.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = express.Router();
router.use(authMiddleware);
router.use(loggedInGuard);

// ! CREAR COMENTARIOS

router.post(
  "/recommendations/:recommendationId/comentarios",
  wrapWithCatch(async (req, res) => {
    console.log(req.body);
    const { recommendationId, message } = await validateCreateCommentPayload({
      message: req.body.message,
      recommendationId: req.params.recommendationId,
    });

    const userId = req.currentUser.id;

    const [{ insertId }] = await db.execute(
      `INSERT INTO comments(message, recommendationId, userId) VALUES(?,?,?)`,
      [message, recommendationId, userId]
    );

    sendOKCreated(res, insertId);
  })
);

export default router;
