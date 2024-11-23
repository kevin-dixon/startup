const { MongoClient } = require('mongodb');
const config = require('../dbConfig.json');
const pass = encodeURIComponent(config.password)
const url = `mongodb+srv://${config.userName}:${pass}@${config.hostname}/?retryWrites=true&w=majority&appName=MafiaClusterA`;
