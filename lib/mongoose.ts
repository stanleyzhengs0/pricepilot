import mongoose from 'mongoose'

let isConnected = false; //variable to track the connection status

export const connectToDB = async () =>{
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URI) return console.log('MONGODB_URI Not defined');

    if(isConnected) return console.log("Use exsiting database connection");

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
        isConnected = true; 

        console.log("MongoDB Connected")

    } catch (error) {
        console.log(error);
    }

}