import { Router } from "express";
import { deleteProject, getProjectById, getProject, postProject, putProject } from "../controllers/project.controller";
import { authenticateToken } from "..";

const express = require("express");
const router: Router = express.Router();


router.use(authenticateToken);
router.get("/",getProject);
router.get("/:id",getProjectById);
router.post("/",postProject);
router.put("/:id",putProject);
router.delete("/:id",deleteProject);

module.exports = router;






