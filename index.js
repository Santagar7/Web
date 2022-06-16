// в терміналі пишеш npm install
// чекаєш доки все не встановиться
//запускаєш із package.json там є команда  start
const express = require("express");
const router = require("./routes/routes");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {sequelize} = require('./models/index.js');

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({
    extended: true
  }));

sequelize.sync().then(()=>{
  console.log('DB connected !')
})
app.use(router);



app.listen(3000,() => 
  console.log("Server listening at port 3000"));