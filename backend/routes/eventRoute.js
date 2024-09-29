import express from "express";
import multer from "multer";
import { addEvent, listEvent, removeEvent } from "../controllers/eventController.js";

const eventRouter = express.Router();

// Image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

eventRouter.post("/add",upload.single("image"),addEvent)
eventRouter.get("/list",listEvent)
eventRouter.post("/remove",removeEvent)

export default eventRouter;