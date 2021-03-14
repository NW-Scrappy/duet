const mysql = require("mysql");

const db = mysql.createConnection({
    host: "us-cdbr-east-03.cleardb.com",
    user: "b763bbfda334cc",
    password: "369a6f58",
    database: "heroku_7bd83144cf32573",
});

module.exports = db;

//mysql://b763bbfda334cc:369a6f58@us-cdbr-east-03.cleardb.com/heroku_7bd83144cf32573?reconnect=true