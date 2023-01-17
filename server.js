const express = require('express');
const mongoose=require('mongoose');
const app =express();
const bodyParser=require('body-parser');
const cors = require('cors')





//import routes

const postRoutes=require('./Routes/posts')
const loginRoutes=require('./Routes/login')
const cutomerRoutes=require('./Routes/customer')

//app midleware 
app.use(bodyParser.json());
app.use(postRoutes);
app.use(cutomerRoutes);
app.use(loginRoutes);
app.use(cors()) // Use this after the variable declaration


const PORT=8000;
const DB_URL='mongodb+srv://uvindu:Uvindu8800@mernapp.crwpilm.mongodb.net/MERN_CRUD?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB Connected');
}
).catch((err)=>console.log('DB Connected error',err));


app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
});