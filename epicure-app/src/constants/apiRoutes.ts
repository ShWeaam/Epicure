export const REACT_API_URL = "https://epicure-server.herokuapp.com"
export const DATA_TO_GET_FROM_API = ["chefs", "resturants", "dishes"]

export const API_MAIN_ROUTES = {
    RESTURANTS: "/resturants",
    CHEFS: "/chefs",
    DISHES: "/dishes",
}

export const RESTURANTS_API = {
    GET_ALL_RESTURANTS: "/getAllResturants",
    GET_RESTURANT: "/getResturant",
    GET_CHEF_RESTURANTS: "/getChefResturants",
    CREATE_RESTURANT: "/createResturant",
    UPDATE_RESTURANT: "/updateResturant",
    DELETE_RESTURANT: "/deleteResturant",
    DELETE_RESTURANTS: "/deleteResturants",
}

export const CHEFS_API = {
    GET_ALL_CHEFS: "/getAllChefs",
    GET_FILTERED_CHEFS: "/getFilteredChefs",
    GET_CHEF: "/getchef",
    GET_CHEF_BY_ID: "/getChefByID",
    CREATE_CHEF: "/createChef",
    UPDATE_CHEF: "/updatechef",
    DELETE_CHEF: "/deletechef",
    DELETE_CHEFS: "/deletechefs",
}

export const DISHES_API = {
    GET_ALL_DISHES: "/getAllDishes",
    // GET_FILTERED_DISHES: "getFilteredDishes",
    GET_DISH_BY_NAME: "/getDishByName",
    GET_DISHES_BY_RESTURANT_NAME: "/getDishesByResturantName",
    GET_DISHESBY_CATEGORY: "/getDishesByCategory",
    CREATE_DISH: "/createDish",
    UPDATE_DISH: "/updateDish",
    DELETE_DISH: "/deleteDish",
    DELETE_DISHES: "/deleteDishes",
}

export const USERS_API = {
    GET_ALL_USERS: "/getAllUsers",
    GET_USER: "/getUser",
    SIGN_UP: "/signUp",
    UPDATE_USER: "/updateUser",
    UPDATE_PASSWORD: "/updatePassword",
    DELETE_USER: "/deleteUser",
}