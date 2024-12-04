import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    // username:String,
    // email:String,
    // isActive:String ye bi chalta hai
    username: {
      //object bi define karsaktay hain
      type: String,
      required: true, //ye data hona hi chaye
      unique: true, //matlab username unique honay chaye
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password must be required'],
    },
  },
  { timestamps: true } //usercreated and acive
);
export const User = mangoose.model('User', userSchema); //db pluraal store hota like users
