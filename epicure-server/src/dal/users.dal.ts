import { ObjectId } from "mongoose";
import User from "../db/models/users";

const UsersDal = {

  getAllUsers: async () => {
    return await User.find();
  },

  getUser: async (userEmail: string) => {
    const user = await User.find({ email: userEmail });
    return user ? user : false;
  },

  createUser: async (user: any) => {
    // user = new User({ ...user }),
    user = new User({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phone: user.phone,
    }),
      user.save(function (err: any, results: any) {
        return results;
      });
  },

  updateUser: async (user: any) => {
    await User.findOne({
      email: user.email,
    }).updateOne({
      $set: {
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        phone: user.phone,
      }
    });
    const updatedUsers = await User.find();
    return updatedUsers;
  },

  updatePassword: async (id: any, user: any) => {
    const res = await User.findByIdAndUpdate(id, {
      password: user.password
    }, {
      new: true
    });
    return res ? res : false;
  },

  deleteUser: async (id: ObjectId) => {
    const res = await User.findByIdAndDelete(id);
    return res;
  },

  // deleteAllUsers: async () => {
  //   const res = await User.deleteMany({});
  //   return res;
  // }
};

export default UsersDal;


