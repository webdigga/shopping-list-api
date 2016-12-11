var mongoose = require('mongoose');
var IngredientSchema = new mongoose.Schema({
  name: String,
  type: String,
  option: Boolean,
  recipe: String
});
module.exports = mongoose.model('Ingredient', IngredientSchema);