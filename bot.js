process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose');
var request = require('request');
const User = require('./models/user');
const moment = require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");
var Msg = {};

//Bot Token
const token = process.env.BotToken;
const bot = new TelegramBot(token, {polling: true});

// Message : /start
bot.onText(/\/start/, (msg, match) => {
    saveUser(msg.chat.id);
    text = "반갑습니다. :)\n\n*9시부터 18시까지 직장인의 건강을 위해 작동하는 봇입니다. *\n\n"
        +"❤ 제작자 [MiryangJung](https://miryang.dev) ❤";
    bot.sendMessage(msg.chat.id, text, {parse_mode: "Markdown"});
});



Msg.Water01 = () => {
    SendMsg("https://i.ibb.co/rpXLQVQ/water01.jpg","💧 물 한 컵을 마셔요!");
};

Msg.Water02 = () => {
    SendMsg("https://i.ibb.co/JyB0w2n/water02.jpg","💧 물 한 컵을 마셔요!");
};

Msg.Water03 = () => {
    SendMsg("https://i.ibb.co/VC1S3Bh/water03.jpg","💧 물 한 컵을 마셔요!");
};

Msg.Stretching01=()=> {
    SendMsg("https://i.ibb.co/6vJrMhw/s01.png",
        "💪 등, 어깨 뒤쪽 스트레칭 \n" +
        "1. 팔을 가슴 앞으로 교차하여 당겨줍니다.\n" +
        "2. 팔을 머리 뒤로 구부려 당겨줍니다.");
};

Msg.Stretching02=()=> {
        SendMsg("https://i.ibb.co/8g4mZ84/s02.jpg",
            "💪 목 스트레칭 \n" +
            "1. 대각선 뒤 방향으로 천천히 당깁니다.\n" +
            "2. 옆으로 천천히 당깁니다.\n" +
            "3. 대각선 방향으로 천천히 당깁니다.");
};

Msg.Stretching03=()=> {
        SendMsg("  https://i.ibb.co/2Z3YNKm/s03.gif",
            "💪 목 스트레칭 \n" +
            "목뒤에 손을 대고 천천히 뒤로 젖힙니다.");
};


Msg.Eye=()=> {
    SendMsg("https://i.ibb.co/1ssMhmd/eye01.gif","👀 눈 운동을 해요! \n출처 : SK이노베이션");
}


function SendMsg(url,cap) {
    User.find({activate:true})
        .exec(function(err, lists){
            if(err) console.log("User list Error : "+err);
            else {
                for(i=0; i<lists.length; i++){
                    bot.sendPhoto(lists[i].chatId, url, {caption: cap, parse_mode: "Markdown"},);
                }
            }
        });
}

function saveUser(chatId){
    User.find({chatId:chatId})
        .exec()
        .then(data => {
            if(data.length>=1){
                User.findOneAndUpdate({chatId:chatId, activate:false}, {$set:{activate:true}}, function(err) {
                    if(err) console.log('User activate Change to True Error : '+err);
                    else console.log("User activate Change to True : "+chatId);
                })

            }
            if (data.length < 1) {
                const element = new User({
                    _id: new mongoose.Types.ObjectId(),
                    chatId:chatId,
                    join:moment().format('YYYY-MM-DD HH:mm:ss')
                });
                element
                    .save()
                    .then(result => {
                        console.log("User Save : "+result.chatId);
                    })
                    .catch(err => {
                        console.log("User Save Error : " + err);
                    });
            }
        });
}

module.exports.Msg=Msg;