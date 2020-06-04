/*
 * Write your server code in this file.
 *
 * name: Akhil Sukhthankar
 * email: sukhthaa@oregonstate.edu
 */
var fs = require('fs');
var http = require('http');

//cachedIndex, cachedError, cachedStyle, cachedScript are to check if they have been called before.
var cachedIndex = "";
console.log(cachedIndex);
function cacheIndex() {
    if(cachedIndex === ""){
        console.log("Retrieving local copy of index.html");
        cachedIndex = fs.readFileSync('public/index.html', 'utf8');
        return cachedIndex;
    }
    else{
        console.log("Retrieving cached copy of index.html");
        return cachedIndex;
    }
}

var cachedError = "";
function cacheError() {
    if(cachedError === ""){
        console.log("Retrieving local copy of 404.html");
        cachedError = fs.readFileSync('public/404.html', 'utf8');
        return cachedError;  
    }
    else{
        console.log("Retrieving cached copy of 404.html");
        return cachedError;
    } 
}

var cachedStyle = "";
function cacheStyle() {
    if(cachedStyle === ""){
        console.log("Retrieving local copy of style.css");
        cachedStyle = fs.readFileSync('public/style.css', 'utf8');
        return cachedStyle;
    }
    else{
        console.log("Retrieving cached copy of style.css");
        return cachedStyle;
    } 
}

var cachedScript = "";
function cacheScript() {
    if(cachedScript === ""){
        console.log("Retrieving local copy of index.js");
        cachedScript = fs.readFileSync('public/index.js', 'utf8');
        return cachedScript;
    }
    else{
        console.log("Retrieving cached copy of index.js");
        return cachedScript;
    } 
}


var method;
var url;

var server = http.createServer((req,res) => {
    method = req.method;
    url = req.url;
    // console.log("\n== method " , method); 
    console.log("== resource " , url); 
    // console.log("== headers " , req.headers);

    if(url === "/index.html" || url === "/"){
        res.writeHead(200, {
            "Content-Type": "text/html"
          });
        res.write(fs.readFileSync('public/index.html', 'utf8'));
        res.end();
    }
    else if(url === "/style.css"){
        res.writeHead(200, {
            "Content-Type": "text/css"
          });
        res.write(cacheStyle());
        res.end();
    }
    else if(url === "/index.js"){
        res.writeHead(200, {
            "Content-Type": "application/javascript"
          });
        res.write(cacheScript());
        res.end();
    }
    else if(url === "/404.html"){
        res.writeHead(200, {
            "Content-Type": "text/html"
          });
        res.write(cacheError());
        res.end();
    }
    else{
        res.writeHead(404, {
            "Content-Type": "text/html"
          });
        res.write(cacheError());
        res.end();
    }
});

console.log("Checking for default port...");
console.log("Your default PORT is", process.env.PORT);
var PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("Starting on port" , PORT);
})
