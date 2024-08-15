//Instantiate Express and App
const express = require('express');
const app = express();

//Defining PORT
require('dotenv').config();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

//Database Connection
const db = require("./config/database");
db.connect();

//Cloudinary Connection
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//Route Mounting
const Upload  = require("./routes/FileUpload");
app.use('/api/v1/upload' , Upload);

//App Activation 
app.listen(PORT , () => {
    console.log(`App is running at ${PORT}`);
})