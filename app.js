import "dotenv/config";
import express from "express";
import authenticationRoutes from "../ExperienciasdeViajespara chopear/src/routes/authentication.js";
import recommendationsRoutes from "../ExperienciasdeViajespara chopear/src/routes/recommendations.js";
import commentsRoutes from "../ExperienciasdeViajespara chopear/src/routes/comments.js";
import { PORT, PUBLIC_DIR, SERVER_HOST } from "./constants.js";
import { throwNotFoundError } from "../ExperienciasdeViajespara chopear/src/utils/errors.js";

const app = express();

const staticFileHandler = express.static(PUBLIC_DIR);
app.use(staticFileHandler);

const jsonParser = express.json();
app.use(jsonParser);

app.use(authenticationRoutes);
app.use(recommendationsRoutes);
app.use(commentsRoutes);

app.use("*", (req, res) => {
  throwNotFoundError();
});

app.use((req, res) => {
  res.status(404).send({
    status: "error",
    message: "Not found",
  });
});

app.use((error, req, res, next) => {
  console.error(error);

  res.status(error.httpStatus || 500).send({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en:`, SERVER_HOST, `🤘!`);
});
