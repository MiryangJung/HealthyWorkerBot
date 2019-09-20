const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    chatId :{type:String},
    join:{type:String},
    activate:{type:Boolean, default:true}
});


module.exports = mongoose.model("User", userSchema);