const JobType = require('../models/jobTypeModel.js');
const ErrorResponse = require('../utils/errorResponse.js');

//create job category
exports.createJobType = async (req, res, next) => {

	try {
		const jobT = await JobType.create({
			jobTypeName: req.body.jobTypeName,
			user: req.body.user.id,
		});
		res.status(201).json({
			success: true,
			jobT
		});
	} catch (error) {
		next(error);
	}
}


//all jobs category
exports.allJobsType = async (req, res, next) => {

	try {
		const jobT = await JobType.find();
		res.status(200).json({
			success: true,
			jobT
		});
	} catch (error) {
		next(error);
	}
}