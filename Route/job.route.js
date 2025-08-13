import express from "express";
import jobController from "../Controller/job.controller.js";

const router=express.Router();

router.post("/create",jobController.create);
router.get("/list",jobController.list);
router.patch("/edit",jobController.edit);
router.delete("/delete",jobController.deleteJob);


export default router;