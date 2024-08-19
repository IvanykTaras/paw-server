import { Router } from "express";
import { login, showuser, token } from "../controllers/autorization.controller";
import { authenticateToken } from "..";

const express = require("express");
const router: Router = express.Router();

router.post("/token", token);
router.post("/login", login);
router.get("/showuser", authenticateToken ,showuser);

module.exports = router;