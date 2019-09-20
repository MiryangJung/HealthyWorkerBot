const express = require('express');
const app = express();
const node_cron = require('node-cron');
const mongoose = require('mongoose');
const PORT= process.env.PORT || 3000;

const Bot = require("./bot.js");
require("./bot.js");

// DB연결
let url = process.env.DB;
mongoose.connect(url, { useUnifiedTopology: true,useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);



// Send message Scheduler
// Water
node_cron.schedule('10 9-18 * * 1-5', () => {
    Bot.Msg.Water01()
},{
    scheduled: true,
    timezone: "Asia/Seoul"
});

node_cron.schedule('30 9-18 * * 1-5', () => {
    Bot.Msg.Water02()
},{
    scheduled: true,
    timezone: "Asia/Seoul"
});

node_cron.schedule('50 9-18 * * 1-5', () => {
    Bot.Msg.Water03()
},{
    scheduled: true,
    timezone: "Asia/Seoul"
});

// Stretching
node_cron.schedule('0 11 * * 1-5', () => {
    Bot.Msg.Stretching01()
},{
    scheduled: true,
    timezone: "Asia/Seoul"
});

node_cron.schedule('0 13 * * 1-5', () => {
    Bot.Msg.Stretching02()
},{
    scheduled: true,
    timezone: "Asia/Seoul"
});

node_cron.schedule('0 15 * * 1-5', () => {
    Bot.Msg.Stretching03()
},{
    scheduled: true,
    timezone: "Asia/Seoul"
});

node_cron.schedule('0 17 * * 1-5', () => {
    Bot.Msg.Eye()
},{
    scheduled: true,
    timezone: "Asia/Seoul"
});


app.get('/', function (req, res) {
    res.send('HealthyWorkerBot');
});

//listen
app.listen(PORT, function () {
    console.log('Listening on port',PORT);
});