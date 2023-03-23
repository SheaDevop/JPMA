const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


const jobTypeSchema = new mongoose.Schema({

	jobTypeName: {
		type: String,
		trim: true,
		required: [true, 'Job categoty is required'],
		maxlength: 70,
	},
	user: {
		type: ObjectId,
		ref: "User",
		required: true
	},

}, {timestamp: true});



module.exports = mongoose.model("JobType", jobTypeSchema);