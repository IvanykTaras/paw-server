import { Router } from "express";
import { deleteTask, getTaskById, getTask, postTask, putTask } from "../controllers/task.controller";

const express = require("express");
const router: Router = express.Router();



router.get("/",getTask);
router.get("/:id",getTaskById);
router.post("/",postTask);
router.put("/:id",putTask);
router.delete("/:id",deleteTask);

module.exports = router;






