const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/workout", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
});

app.listen(PORT, ()=>{
    console.log(`app running on port ${PORT}`);
})