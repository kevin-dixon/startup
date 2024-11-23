//___________________GENERAL_______________________//
const express = require('express');
const uuid = require('uuid');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const app = express();


// database connection
const config = require('../dbConfig.json');
const pass = encodeURIComponent(config.password)
const url = `mongodb+srv://${config.userName}:${pass}@${config.hostname}/?retryWrites=true&w=majority&appName=MafiaClusterA`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');

app.use(cookieParser());

// Saved in memory and disappear whenever the service is restarted.
let players = {};
let gameIDs = {};
let events = {};
let hosts = {};

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// listen at given port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//_____________________DATA_______________________//
// GetTest
var testdata = { test: "testdata" }
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

//GetGameID
apiRouter.get('/players', (_req, res) => {
    res.send(gameIDs);
});

//GetEvents
apiRouter.get('/players', (_req, res) => {
    res.send(events);
});

//_____________________AUTH_______________________//
// CreateAuth a new player
apiRouter.post('/auth/createplayer', async (req, res) => {
    const player = players[req.body.displayName];
    if (player) {
        res.status(409).send({ msg: 'Existing player' });
    } else {
        const user = { displayName: req.body.displayName, gameID: req.body.gameID, token: uuid.v4() };
        players[player.displayName] = player;

        res.send({ token: player.token });
    }
});

// CreateAuth a new host
apiRouter.post('/auth/createhost', async (req, res) => {
    const host = hosts[req.body.email];
    if (host) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const host = { email: req.body.email, password: req.body.password, token: uuid.v4() };
        hosts[host.email] = host;

        res.send({ token: host.token });
    }
});

// GetAuth login an existing host
apiRouter.post('/auth/login', async (req, res) => {
    const host = hosts[req.body.email];
    if (host) {
        if (req.body.password === host.password) {
            host.token = uuid.v4();
            res.send({ token: host.token });
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a host
apiRouter.delete('/auth/logout', (req, res) => {
    const host = Object.values(hosts).find((h) => h.token === req.body.token);
    if (host) {
        delete host.token;
    }
    res.status(204).end();
});