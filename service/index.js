const express = require('express');
const uuid = require('uuid');
const app = express();

// Saved in memory and disappear whenever the service is restarted.
let players = {};
let gameID = {};
let events = {};

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetTest
var testdata = {test: "testdata"}
apiRouter.get('/test', (_req, res) => {
  console.log("In Test")
  res.send(testdata);
});

// GetTestPlayers
var testplayer = {
    "displayName": "example_name",
    "gameID": "12345"
}
apiRouter.get('/testplayers', (_req, res) => {
    res.send(testplayer);
  });

// GetTestEvents
var testevent = {
    "title": "event_name",
    "message": "event message."
}
apiRouter.get('/testevents', (_req, res) => {
    res.send(testevent);
  });

//GetPlayers
apiRouter.get('/players', (_req, res) => {
    res.send(players);
  });

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });