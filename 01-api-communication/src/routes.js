const express = require("express");
const { getEmails, postEmail } = require("./controllers");

const routes = express();

routes.get("/", getEmails);
routes.post("/", postEmail);

module.exports = routes;
