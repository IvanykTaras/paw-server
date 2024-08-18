import { Router } from "express";
import { deleteFunctionality, getFunctionalityById, getFunctionality, postFunctionality, putFunctionality } from "../controllers/functionality.controller";

const express = require("express");
const router: Router = express.Router();



router.get("/",getFunctionality);
router.get("/:id",getFunctionalityById);
router.post("/",postFunctionality);
router.put("/:id",putFunctionality);
router.delete("/:id",deleteFunctionality);

module.exports = router;






