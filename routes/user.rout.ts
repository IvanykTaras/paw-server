import { Router } from "express";
import { deleteUser, getUserById, getUser, postUser, putUser } from "../controllers/user.controller";
import { authenticateToken } from "..";

const express = require("express");
const router: Router = express.Router();


router.get("/",getUser);
router.get("/:id",getUserById);
router.post("/",postUser);
router.put("/:id",putUser);
router.delete("/:id",deleteUser);

module.exports = router;






