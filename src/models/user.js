import mongoose from 'mongoose'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import config from '../config'

const SALT_WORK_FACTOR = 10;
const JWT_SECRET = config.jwtSecret;

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  countries:[],
});

userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});
userSchema.methods.validatePassword = async function (password) {
  return bcrypt.compare(password, this.password).then((isMatch) => {
    if (isMatch) return isMatch;
  });
};

userSchema.methods.generateAccessToken = async function () {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  const user = this;
  const jwt_token = await jwt.sign(
      {
          userId: user.id,
          name: user.name,
      },
      JWT_SECRET,
      { expiresIn: parseInt(exp.getTime() / 1000) }
  );
  return jwt_token;
};

const User = mongoose.model('Users', userSchema)
export default User;