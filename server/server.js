//////////////////////libs here //////////////////
let express = require("express");
let app = express();
let port = process.env.PORT || 8000;

let cors = require("cors");
const bodyParser = require("body-parser");
const axios = require('axios');

//////////////midelws wre/////////////////
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
///////////////////here init /////////



/////////////router here/////////////////
let r;
app.post("/", async (req, res) => {
  r = req.body.transcript;
  console.log(r)
  
  


})


app.get("/data", (req, res) => {
  const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${r}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9e42bcfccbmsh23f232faa430803p1303f0jsne8eeae4e570f',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };
  fetch(url, options).then((res) => res.json()).then((data) => {
    res.send([data])

  })



})






//////////////listen////////////////

app.listen(port);
