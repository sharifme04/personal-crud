const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    ourinfoShema = new Schema({
      name:String,
      email:String,
      phone:String
    });

module.exports = mongoose.model('contactlist', ourinfoShema);
// mongoose.model(modelName, schema)
