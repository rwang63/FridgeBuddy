import Mongoose = require("mongoose");


interface IUsereModel extends Mongoose.Document {
    userID: String;
    password: String;
    email: String;
    firstName: String;
    lastName: String;
    isPremium: boolean;
    favoritList:[{recipeId: String}];
    recentlyView:[{recipeId: String}];
}
export {IUsereModel};