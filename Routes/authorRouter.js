const { Router } = require("express");
const { getAuthorById } = require("../Controllers/authorController");

const authorRouter = Router();

authorRouter.get("/:authorId", getAuthorById);

module.exports = authorRouter;