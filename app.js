const express = require('express');
const bodyParser= require('body-parser');
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

var items=[];
app.get("/", function (req,res){
var today= new Date();
var options = { weekday: 'long', month: 'long', day: 'numeric' };
var day = today.toLocaleString('en-US', options);

res.render("list",{day:day, newItem:items} );
});

app.post("/", function(req,res)
{
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000,function(){
console.log("3000 Port has been started");
});
