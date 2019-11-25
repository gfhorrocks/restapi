var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    primaryLanguage: {
        type: String,
        required: false
    },
    secondaryLanguage: {
        type: String,
        required: false
    },
    startDate: {
        type: Date,
        required: false
    },
    department: {
        type: String,
        required: false
    },
    jobTitle: {
        type: String,
        required: false
    }
});

var Employee = mongoose.model("Employee", EmployeeSchema);

module.exports=Employee;

