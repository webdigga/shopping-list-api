var mongoose = require('mongoose');
var IngredientSchema = new mongoose.Schema({
	name: String,
	type: String,
	option: Boolean,
	recipe: String,
	category: String
});
module.exports = mongoose.model('ingredient', IngredientSchema);