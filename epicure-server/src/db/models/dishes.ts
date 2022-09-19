import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            maxlength: 50,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        category: {
            type: String,
            require: true,
            maxlength: 20,
            trim: true,
            // validate: (value) => {
            //     if (!foodCategories.exists({ name: value })) {
            //         throw new Error("Food category not found in DB");
            //     }
            // }
        },
        resturant: {
            type: String,
            require: true,
            maxlength: 50,
            trim: true
        },
        mealType: {
            type: String,
            require: true,
            maxlength: 20,
            trim: true
        },
        ingredients: {
            type: Array,
            require: true,
        },
        sides: {
            type: Array,
            require: true,
        },
        changes: {
            type: Array,
            require: true,
        },
        imgUrl: {
            type: String,
            require: false,
            default: "",
            trim: true
        },
        isSignatureDish: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    { timestamps: true }
);

const Dish = mongoose.model("Dish", schema);

export default Dish;
