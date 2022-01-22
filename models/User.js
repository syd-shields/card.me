const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Set up schema for Comment 
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
   card: {
     bio: {
      type: String,
      required: true,
     },
     emoticon: {
      type: String, 
      required: true,
     },
     youtube: {
      type: String, 
      required: true,
     },
     twitter: {
      type: String, 
      required: true,
     },
     tiktok: {
      type: String, 
      required: true,
     },
     spotify: {
      type: String, 
      required: true,
     },
     appleMusic: {
      type: String, 
      required: true,
     },
     cardColour: {
      type: String, 
      required: true,
     },
   }
  },);
  

const User = mongoose.model("User", UserSchema);

module.exports = User