const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

class tdg {
    //constructor is used to create a connection to the database
    constructor() {
        this.mysqlConnection = mysql.createPool({
            host: '192.185.72.57',
            user: 'arti17co_room3',
            password: '{iO0(m}L90vn',
            database: 'arti17co_conuhacks',
            multipleStatements: true,
        });
        this.runQuery = function (queryBuild) {
            let conn = this.mysqlConnection;
            queryBuild(conn, function (type) {
                console.log("Completed query " + type + " \n");
            });
        };
    }
    
    //RegisterUser function, it takes the new user values from mapper class and registers it in the database
    registerClient(object, callback) {
        var sql = "INSERT INTO client (name, age, email, password, score, rating, location)  VALUES ('" + object.name + "' , '" + object.age + "' ,'" + object.email + "' ,'" + object.password + "' ,'" + object.score + "','" + object.rating + "','" + object.location + "')";
        this.runQuery(function (conn, completedQuery) {
            console.log(sql);
            conn.query(sql, (err, rows, fields) => {
                if (!err) {
                    let msg = {};
                    msg.success = "true";
                    msg.message = "no message";
                    msg.data = rows;
                    callback(msg);
                }
                else {
                    console.log(err);
                    let msg = {};
                    msg.success = "false";
                    msg.message = err.sqlMessage;;
                    callback(msg);
                }
                completedQuery("Registered Client");
            })
        })
    }

    //RegisterUser function, it takes the new user values from mapper class and registers it in the database
    registerMentor(object, callback) {
        var sql = "INSERT INTO mentor (name, age, email, password, education, rating, location)  VALUES ('" + object.name + "' , '" + object.age + "' ,'" + object.email + "' ,'" + object.password + "' ,'" + object.education + "','" + object.rating + "','" + object.location + "')";
        this.runQuery(function (conn, completedQuery) {
            console.log(sql);
            conn.query(sql, (err, rows, fields) => {
                if (!err) {
                    let msg = {};
                    msg.success = "true";
                    msg.message = "no message";
                    msg.data = rows;
                    callback(msg);
                }
                else {
                    console.log(err);
                    let msg = {};
                    msg.success = "false";
                    msg.message = err.sqlMessage;;
                    callback(msg);
                }
                completedQuery("Registered Mentor");
            })
        })
    }

    //RegisterUser function, it takes the new user values from mapper class and registers it in the database
    registermatch(clientId, mentorId, callback) {
        var sql = "INSERT INTO match (clientId, mentorId,  VALUES ('" + clientId + "' , '" + mentorId + "') )";
        this.runQuery(function (conn, completedQuery) {
            conn.query(sql, (err, rows, fields) => {
                if (!err) {
                    let msg = {};
                    msg.success = "true";
                    msg.message = "no message";
                    msg.data = rows;
                    callback(msg);
                }
                else {
                    console.log(err);
                    let msg = {};
                    msg.success = "false";
                    msg.message = err.sqlMessage;;
                    callback(msg);
                }
                completedQuery("Registered Match");
            })
        })
    }

    //get all clients
    fetchclient(callback) {
        let sql = 'SELECT id, name, age, email, score, rating, location FROM client';
        console.log(sql);
        this.runQuery(function (conn, completedQuery) {
            conn.query(sql, (err, rows, fields) => {
                if (!err) {
                    if (rows.length > 0) {
                        let msg = {};
                        msg.success = "true";
                        msg.message = "no message";
                        msg.users = rows;
                        callback(msg);
                    }
                    else {
                        let msg = {};
                        msg.success = "false";
                        if (rows.messages || rows.message == "") {
                            msg.message = "empty client table";
                        }
                        else {
                            msg.message = rows.message;
                        }
                        callback(msg);
                    }
                }
                else {
                    // console.log(err);
                    let msg = {};
                    msg.success = "false";
                    msg.message = err.sqlMessage;
                    callback(msg);
                }
                completedQuery("fetch clients");
            })
        })
    }

    login(email,password,callback) {
        let sql = "SELECT * FROM mentor WHERE ('" + email + "' , '" + password + "') )" ;
        console.log(sql);
        this.runQuery(function (conn, completedQuery) {
            conn.query(sql, (err, rows, fields) => {
                if (!err) {
                    if (rows.length > 0) {
                        let msg = {};
                        msg.success = "true";
                        msg.message = "no message";
                        msg.users = rows;
                        callback(msg);
                    }
                    else {
                        let msg = {};
                        msg.success = "false";
                        if (rows.messages || rows.message == "") {
                            msg.message = "empty client table";
                        }
                        else {
                            msg.message = rows.message;
                        }
                        callback(msg);
                    }
                }
                else {
                    // console.log(err);
                    let msg = {};
                    msg.success = "false";
                    msg.message = err.sqlMessage;
                    callback(msg);
                }
                completedQuery("fetch clients");
            })
        })

        let sql2 = "SELECT * FROM client WHERE ('" + email + "' , '" + password + "') )" ;
        console.log(sql);
        this.runQuery(function (conn, completedQuery) {
            conn.query(sql2, (err, rows, fields) => {
                if (!err) {
                    if (rows.length > 0) {
                        let msg = {};
                        msg.success = "true";
                        msg.message = "no message";
                        msg.users = rows;
                        callback(msg);
                    }
                    else {
                        let msg = {};
                        msg.success = "false";
                        if (rows.messages || rows.message == "") {
                            msg.message = "empty client table";
                        }
                        else {
                            msg.message = rows.message;
                        }
                        callback(msg);
                    }
                }
                else {
                    // console.log(err);
                    let msg = {};
                    msg.success = "false";
                    msg.message = err.sqlMessage;
                    callback(msg);
                }
                completedQuery("fetch clients");
            })
        })
    }

    //get all mentors
    fetchmentor(callback) {
        let sql = 'SELECT id, name, age, email, education, rating, location FROM mentor';
        this.runQuery(function (conn, completedQuery) {
            conn.query(sql, (err, rows, fields) => {
                if (!err) {
                    if (rows.length > 0) {
                        let msg = {};
                        msg.success = "true";
                        msg.message = "no message";
                        msg.users = rows;
                        callback(msg);
                    }
                    else {
                        let msg = {};
                        msg.success = "false";
                        if (rows.messages || rows.message == "") {
                            msg.message = "empty client table";
                        }
                        else {
                            msg.message = rows.message;
                        }
                        callback(msg);
                    }
                }
                else {
                    // console.log(err);
                    let msg = {};
                    msg.success = "false";
                    msg.message = err.sqlMessage;
                    callback(msg);
                }
                completedQuery("fetch users");
            })
        })
    }

    //get all mentors
    fetchmatch(callback) {
        let sql = 'SELECT * FROM match';
        this.runQuery(function (conn, completedQuery) {
            conn.query(sql, (err, rows, fields) => {
                if (!err) {
                    if (rows.length > 0) {
                        let msg = {};
                        msg.success = "true";
                        msg.message = "no message";
                        msg.users = rows;
                        callback(msg);
                    }
                    else {
                        let msg = {};
                        msg.success = "false";
                        if (rows.messages || rows.message == "") {
                            msg.message = "empty client table";
                        }
                        else {
                            msg.message = rows.message;
                        }
                        callback(msg);
                    }
                }
                else {
                    // console.log(err);
                    let msg = {};
                    msg.success = "false";
                    msg.message = err.sqlMessage;
                    callback(msg);
                }
                completedQuery("fetch users");
            })
        })
    }

    //delete from the database
    deleteuser(type, obj_paramneter) {
        switch (type) {
            case "client":
                var sql = "DELETE FROM client  WHERE id = obj_parameter.id";
            case "mentor":
                var sql = "DELETE FROM mentor WHERE id = obj_parameter.id";
            case "match":
                var sql = "DELETE FROM match WHERE id = obj_parameter.id";
        }
    }
   
}
module.exports = tdg;

