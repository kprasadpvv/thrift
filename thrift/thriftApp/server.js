var express = require('express'),
    bodyParser = require('body-parser'),
    io = require('socket.io'),
    app = express(),
    PORT = 8081,
    http = require('http').Server(app);

    // specifying the directory to look
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
http.listen(PORT, () =>
    console.log(`listing on port: ${PORT}`)
);
