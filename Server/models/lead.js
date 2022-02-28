const mongoose = require("mongoose");
const leadSchema = new mongoose.Schema(
  {
    name: { 
        type: String, 
        required: true, 
        minlength: 2, 
        maxlength: 30 },
    phone: { 
          type: String, 
          required: true, 
          minlength: 7, 
          maxlength: 15 },
    mail: { 
            type: String, 
            required: true, 
            minlength: 5, 
            maxlength: 30 },
  },
  { versionKey: false, toJSON: { virtuals: true }, id: false }
);
const Lead = mongoose.model("Lead", leadSchema, "leads");
module.exports = Lead;