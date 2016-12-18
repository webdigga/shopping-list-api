var mongoose = require('mongoose');
var RecipeSchema = new mongoose.Schema({
	name: String,
	recipe: String
}, { collection : 'recipes' });
module.exports = mongoose.model('Recipe', RecipeSchema);
