const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mysql = require('mysql');

const app = express();

app.use(express.static("public"));

var con = mysql.createConnection({
    host: "db4free.net",
    user: "project_2802",
    password: "56844978@yR",
    database: "db_2802",
    port: 3306

});

con.connect(function (err) {
    if (err)
        throw err;

    else
        console.log("Connected!");

    // var sql = "INSERT into restraunts"+(); add the data to be inserted here

    //   con.query(sql, function (err, result) {

    //     if (err) 
    //     throw err;


    //     console.log(result);
    //   });

});



app.listen(process.env.PORT || 3000, function () {
    console.log("The server is started on port 3000");
});





app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/mainportal.html");




});

app.get("/collab.html", function (req, res) {

    res.sendFile(__dirname + "/collab.html");


});

app.get("/index.html", function (req, res) {

    res.sendFile(__dirname + "/index.html");


});

app.get("/join.html", function (req, res) {

    res.sendFile(__dirname + "/join.html");


});

app.get("/sign_in.html", function (req, res) {

    res.sendFile(__dirname + "/sign_in.html");


});

app.get("/contact.html", function (req, res) {

    res.sendFile(__dirname + "/contact.html");


});


app.post("/contact.html", function (req, res) {

    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    var sql = "INSERT into contact values(" + "'" + name + "'" + "," + "'" + email + "'" + "," + "'" + message + "'" + ");";


    con.query(sql, function (err, result) {

        if (err)
            throw err;


        console.log(result);
    });


    res.sendFile(__dirname + "/contact.html");

});

app.post("/join.html", function (req, res) {

    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    var sql = "INSERT into signup values(" + "'" + name + "'" + "," + "'" + email + "'" + "," + "'" + password + "'" + ");";


    con.query(sql, function (err, result) {

        if (err)
            throw err;


        console.log(result);
    });


    res.sendFile(__dirname + "/sign_in.html");

});

var check;

app.post("/sign_in.html", function (req, res) {

    var email = req.body.email;
    var password = req.body.password;

    var sql = "Select * from signup where email='" + email + "'";


    con.query(sql, function (err, result) {

        if (err)
            throw err;


        check = result[0].Password;
        console.log(check);


        if (password === check)
            res.sendFile(__dirname + "/availability.html");

        else
            res.sendFile(__dirname + "/sign_in.html");

    });




});

app.post("/availability.html", function (req, res) {

    var email = req.body.email;
    var password = req.body.password;
    var date = req.body.date;
    var food = req.body.food;

    var sql = "INSERT into restraunts values(" + "'" + email + "'" + "," + "'" + password + "'" + "," + "'" + date + "'" + "," + "'" + food + "'" + ");";


    con.query(sql, function (err, result) {

        if (err)
            throw err;


        console.log(result);
    });


    res.sendFile(__dirname + "/availability.html");

});






