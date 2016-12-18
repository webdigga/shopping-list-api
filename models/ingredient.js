var mongoose = require('mongoose');
var IngredientSchema = new mongoose.Schema({
	name: String,
	type: String,
	option: Boolean,
	recipe: String,
	category: String
}, { collection : 'ingredients' });
module.exports = mongoose.model('Ingredient', IngredientSchema);