var mongoose = require('mongoose');
var RecipeSchema = new mongoose.Schema({
	name: String,
	type: String,
	option: Boolean,
	recipe: String
});
module.exports = mongoose.model('Recipe', RecipeSchema);
