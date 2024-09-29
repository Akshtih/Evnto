import eventModel from "../models/eventModel.js";
import fs from "fs";

// add event 

const addEvent = async (req,res) => {
    let image_filename = `${req.file.filename}`;

    const event = new eventModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
        seats_remaining: req.body.seats_remaining
    })
    try{
        await event.save();
        res.json({success:true,message:"Event Added"});
    } catch (error){
        console.log(error);
        res.json({success:false,message:"Event Not Added"});
    }
}

// all events list
const listEvent = async (req,res) => {
    try{
        const events = await eventModel.find({});
        res.json({success:true,data:events});
    } catch(error){
        console.log(error);
        res.json({success:false, message: "Error"})
    }
}

// remove event 

const removeEvent = async(req,res)=>{
    try{
        const event = await eventModel.findById(req.body.id);
        fs.unlink(`uploads/${event.image}`, () => {})

        await eventModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Event Removed"})
    } catch(error){
        console.log(error);
        res.json({success:false,message:"Event Not Removed"})
    }
}

export {addEvent,listEvent,removeEvent}