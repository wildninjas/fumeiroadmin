'use strict'

/*
|--------------------------------------------------------------------------
| Http server
|--------------------------------------------------------------------------
|
| This file bootstraps Adonisjs to start the HTTP server. You are free to
| customize the process of booting the http server.
|
| """ Loading ace commands """
|     At times you may want to load ace commands when starting the HTTP server.
|     Same can be done by chaining `loadCommands()` method after
|
| """ Preloading files """
|     Also you can preload files by calling `preLoad('path/to/file')` method.
|     Make sure to pass a relative path from the project root.
*/
var express = require('express');
var app  = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
 
  host:'94.46.28.176',
  port:'3306',
  user:'wwwwild_wildadmin',
  password:'t71469469', //empty for window
  database: 'wwwwild_fumeiro'

});

var server = app.listen(1348, function(){
var host = server.address().address
var port = server.address().port
console.log("start");

});

con.connect(function(error){
if(error) console.log(error);
else console.log("connected");
});

app.get('/users', function(req, res){
con.query('select id,name,email from users', function(error, rows, fields){
      if(error) console.log(error);

      else{
          console.log(rows);
          res.send(rows);

      }

});
});
app.get('/users/:id', function(req, res){

con.query('select name,email from users where id like ? ', [req.params.id], function(error, rows, fields){
      if(error) console.log(error);

      else{
          console.log(rows);
          res.send(rows);

      }

});
});
app.put('/users/email/:email/:id', function(req, res){

  con.query('UPDATE email from users where id like ? ', [req.params.id], function(error, rows, fields){
        if(error) console.log(error);
  
        else{
            console.log(rows);
            res.send(rows);
  
        }
  
  });
  });
  app.get('/users/:id', function(req, res){

    con.query('select name,email from users where id like ? ', [req.params.id], function(error, rows, fields){
          if(error) console.log(error);
    
          else{
              console.log(rows);
              res.send(rows);
    
          }
    
    });
    });

  

const { Ignitor } = require('@adonisjs/ignitor')

new Ignitor(require('@adonisjs/fold'))
  .appRoot(__dirname)
  .fireHttpServer()
  .catch(console.error)
