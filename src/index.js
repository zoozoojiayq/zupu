var express = require("express");
var app = express();

const PORT = 10000;

app.use(express.static("./resource"));

app.listen(PORT,function(){
	console.log("server started on port:"+PORT);
});