import { Request, Response } from "express";
import UsersService from "../services/users.service";

const UsersController = {

    getAllUsers: async (req: Request, res: Response) => {
        const users = await UsersService.getAllUsers();
        return res.send(users);
    },

    getUser: async (req: Request, res: Response) => {
        const params = req.body;
        const users = await UsersService.getUser(params);
        return res.send(users);
    },

    createUser: async (req: Request, res: Response) => {
        const params = req.body;
        const user = await UsersService.createUser(params);
        return res.send(user);
    },

    updateUser: async (req: Request, res: Response) => {
        const params = req.body;
        const user = await UsersService.updateUser(params);
        return res.send(user);
    },

    updatePassword: async (req: Request, res: Response) => {
        const params = req.body;
        const user = await UsersService.updatePassword(params.id, params.user);
        return res.send(user);
    },

    deleteUser: async (req: Request, res: Response) => {
        const params = req.body;
        const user = await UsersService.deleteUser(params);
        return res.send(user);
    },

    // deleteAllUsers: async (req: Request, res: Response) => {
    //     const user = await UsersService.deleteAllUsers();
    //     return res.send(user);
    // },
};

export default UsersController;

