/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Akhil Sukhthankar
 * Email: sukhthaa@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var express_handlebars = require('express-handlebars');
var twit_data = require('./twitData.json')

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', express_handlebars({ defaultLayout: 'outline' }));
app.set('view engine', 'handlebars');

//only using files from the public folder
app.use(express.static('public')); 

app.get('/', (req, res, next) => {
  console.log("==> /");
  res.status(200).render('twitPage', {
    showAddTwitModal: true,
    allTwits: twit_data
  });
});

app.get('/twits/:index', (req, res, next) => {
  var index = parseInt(req.params.index);
  if(index >= twit_data.length){
    next();
  }
  else{
    console.log("==> /twits/" + index);
    res.status(200).render('twitPage', {
      showAddTwitModal: false,
      allTwits: [twit_data[index]]
    });
  }
});

//if anything else is recieved, return the 404 page
app.get('*', function (req, res, next) {
  console.log("==> 404!");
  res.status(404).render('errorPage');
  // res.status(404).sendFile(path.join(__dirname, 'public', '404Page'));
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
