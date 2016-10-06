var express = require('express');
var app = express();

//
// app.use(express.static(__dirname + '/vendor'));
// app.use(express.static(__dirname + '/css'));
// app.use(express.static(__dirname + '/docs'));
// app.use(express.static(__dirname + '/img'));
// app.use(express.static(__dirname + '/less'));
// app.use(express.static(__dirname + '/js'));
// app.use(express.static(__dirname + '/less'));
//
// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
//     // res.send('Welcome');
//   });
//   app.listen(3000, function() {
//     console.log('whatever');
//   });

//node to serve the files
  var static_path = __dirname + '/public';
  app.use('/vendor', express.static(static_path + '/vendor'));
  app.use('/css', express.static(static_path + '/css'));
  app.use('/docs', express.static(static_path + '/docs'));
  app.use('/js', express.static(static_path + '/js'));
    app.use('/less', express.static(static_path + '/less'));
  app.use('/img', express.static(static_path + '/img'));
  app.use('/mail', express.static(static_path + '/mail'));
// app.use(express.static(static_path + '/bundle.css'));
// app.use(express.static(static_path + '/bundle.js'));
  // API endpoints would need to go here

  app.use('/*', function(req, res, next) {
    res.sendFile(static_path + '/creative.html');
    console.log('whater');
  });


  var port = 3000;
  app.listen(port, function() {
    console.log('listening on port:', port);
  });
