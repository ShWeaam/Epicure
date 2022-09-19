import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 50,
      trim: true
    },
    imgUrl: {
      type: String,
      require: false,
      default: "",
      trim: true
    },
    views: {
      type: Number,
      required: true,
      default: 0
    },
    dateJoined: {
      type: Date,
      require: true,
      default: Date.now()
    },
  },
  { timestamps: true }
);

const Chef = mongoose.model('Chefs', Schema);

export default Chef;

