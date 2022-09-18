import UsersDal from "../dal/users.dal";

const UsersService = {

    getAllUsers: async () => {
        const res = await UsersDal.getAllUsers();
        return res;
    },

    getUser: async (userEmail: string) => {
        const res = await UsersDal.getUser(userEmail);
        return res;
    },

    createUser: async (user: any) => {
        const res = UsersDal.createUser(user);
        return res;
    },

    updateUser: async (user: any) => {
        const res = await UsersDal.updateUser(user);
        return res;
    },

    updatePassword: async (id: any, user: any) => {
        const res = await UsersDal.updatePassword(id, user);
        return res;
    },

    deleteUser: async (user: any) => {
        const res = await UsersDal.deleteUser(user.id);
        return res;
    },

    // deleteAllUsers: async () => {
    //     const res = await UsersDal.deleteAllUsers();
    //     return res;
    // },
};

export default UsersService;


