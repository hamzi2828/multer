const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
// var cors = require("cors");
const mongooseConnection = require("./helpers/mongoose-connection");
const appRoutes = require("./routes");

// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
// app.use(cors());

app.use("/", appRoutes);

app.use((_, res) =>{
    res.send({
        message: 'Not found!'
    })
});

mongooseConnection();

app.listen(6000, (req, res)=>{
    console.log("Server is listening on port 6000");
})