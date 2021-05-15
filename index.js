const express = require('express')
const app = express()
const PORT = 3000
const bodyParser = require("body-parser");
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res)=> {
    res.status(200).json("Hello world")
})

app.get('/test', (req, res) => {
  res.status(200).json("Test success")
})

app.listen(PORT, ()=> {
    console.log(`App running on port ${PORT}`)
})