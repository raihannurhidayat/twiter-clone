// library
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import {v2 as cloudinary} from "cloudinary"

// routers
import authRouter from "./routers/auth.route.js";
import userRouter from "./routers/user.route.js"
import postRouter from "./routers/post.route.js"
import notificationRouter from "./routers/notification.route.js"

import connecMongoDB from "./db/connectMongoDB.js";

const app = express();

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/notifications", notificationRouter);

app.listen(process.env.PORT, () => {
  console.log(`server running in http://localhost:${process.env.PORT}`);
  connecMongoDB();
});
