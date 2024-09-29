import cors from "cors"
import 'dotenv/config'
import express from "express"
import { connectDB } from "./config/db.js"
import cartRouter from "./routes/cartRoute.js"
import eventRouter from "./routes/eventRoute.js"
import orderRouter from "./routes/orderRoute.js"
import userRouter from "./routes/userRoute.js"


// app config
const app = express()
const port = process.env.PORT || 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection 
connectDB();

// api endpoints
app.use("/api/event",eventRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})



// mongodb+srv://admin:1234@cluster0.qiwzhhc.mongodb.net/?