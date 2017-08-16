var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = Schema(
  {
    name: {type: String, required: true, min: 3, max: 100},
    catergory: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);



// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/categorie/' + this._id;
});



//Export model
module.exports = mongoose.model('Genre', GenreSchema);
