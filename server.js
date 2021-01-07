const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(express.static('public'));
app.use(require("./routes/view.js"));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/workout", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
});
const connection = mongoose.connection;

connection.on("connected", () =>{
    console.log("Mongoose connected successfully")
})
connection.on("error", (err)=>{
    console.log("Mongoose connection error: " + err);
})

app.listen(PORT, ()=>{
    console.log(`app running on port ${PORT}`);
})