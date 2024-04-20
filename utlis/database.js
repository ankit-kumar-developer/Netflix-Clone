import mongoose from "mongoose"
import dotenv from "dotenv"


dotenv.config({
    path: "../.env"
})

const databaseConnection = () => {


    mongoose.connect("mongodb+srv://netflix_app:netflix_app@cluster0.vzhi0kw.mongodb.net/").then(() => {
        console.log("mongodb connected successfully")
    }).catch((error) => {
        console.log(error)
    })
}


export default databaseConnection;