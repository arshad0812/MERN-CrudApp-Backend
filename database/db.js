import mongoose from 'mongoose'

const Connection=async(name,password)=>{
    const URL=`mongodb+srv://${name}:${password}@cluster0.8ghdbkc.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL);
        console.log("Databse connected successfully");
    }
    catch(e){
        console.log("Error : ",e );
    }
}

export default Connection;