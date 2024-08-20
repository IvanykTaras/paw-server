import { Router } from "express";
import {deleteAuthUser, getAuthUser, getAuthUserById, postAuthUser, putAuthUser} from "../controllers/authUser.controller"

const express = require("express");
const router: Router = express.Router();


router.get("/",getAuthUser);
router.get("/:id",getAuthUserById);
router.post("/",postAuthUser);
router.put("/:id",putAuthUser);
router.delete("/:id",deleteAuthUser);

module.exports = router;






