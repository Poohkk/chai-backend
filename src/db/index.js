import mongoose from "mongoose";
export const DB_NAME = "chaibackend";



const connectDb= async()=>{
    try{
        const connectInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST:${connectInstance.connection.host}`)

    } catch (error){
        console.log("ERROR",error);
        process.exit(1)
    }
};  export default connectDb 