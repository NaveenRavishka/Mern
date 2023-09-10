const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

//import routs
const postRoutes = require("./Routes/post");
const LoginRoutes = require("./Routes/Login");

//middleware 
app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes);
app.use(LoginRoutes);



const port = 8000;
const DB_URL =
  "mongodb+srv://admin:new@cluster0.ifsylcl.mongodb.net/web?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connect");
  })
  .catch((err) => console.log("Error connecting", err));

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
