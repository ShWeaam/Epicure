import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 50,
      trim: true
    },
    chef: {
      type: String,
      require: true,
      maxlength: 50,
      trim: true
    },
    rating: {
      type: Number,
      require: true,
      default: 1
    },
    openTime: {
      type: Number,
      require: true,
      default: 1000
    },
    closeTime: {
      type: Number,
      require: true,
      default: 2400
    },
    imgUrl: {
      type: String,
      require: false,
      default: "",
      trim: true
    },
    dateJoined: {
      type: Date,
      require: true,
      default: Date.now()
    },
    views: {
      type: Number,
      required: true,
      default: 0
    },
    orders: {
      type: Number,
      required: true,
      default: 0,
    }
  },
  { timestamps: true }
);

const Resturant = mongoose.model('Resturant', Schema);

export default Resturant;

