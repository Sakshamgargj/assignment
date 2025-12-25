import dotenv from "dotenv";
import {app} from './App.js'
import connectDB from "./DB/blog-db.js";

dotenv.config();
console.log("PORT: ",process.env.PORT)

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, '0.0.0.0', () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGODB connection failed !!! ", err);
    })
