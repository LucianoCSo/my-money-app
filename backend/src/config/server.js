const express = require('express');
const bodyparser = require('body-parser');
const Server = express();
//const cors = require('cors');
const AllCors = require('./cors');
const queryParser = require('express-query-int')

Server.use(bodyparser.urlencoded({ extended: true }));
Server.use(bodyparser.json());
// Server.use(cors());
Server.use(AllCors);
Server.use(queryParser())

Server.listen(3331, function(){
    console.log("Cosegui Logar")
});

module.exports = Server;