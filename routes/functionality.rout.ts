import { Router } from "express";
import { deleteFunctionality, getFunctionalityById, getFunctionality, postFunctionality, putFunctionality } from "../controllers/functionality.controller";
import { authenticateToken } from "..";

const express = require("express");
const router: Router = express.Router();

router.use(authenticateToken);
router.get("/",getFunctionality);
router.get("/:id",getFunctionalityById);
router.post("/",postFunctionality);
router.put("/:id",putFunctionality);
router.delete("/:id",deleteFunctionality);

module.exports = router;






