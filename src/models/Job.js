import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
	author: {
		type: String,
		required: [ true, 'Please provide the author' ]
	},
	socialMediaLink: {
		type: String,
		required: [ true, 'Please provide the valid url' ]
	},
	dateOfAdd: {
		type: Date,
		required: [ true, 'Please provide the date of add' ]
	},
	title: {
		type: String,
		required: [ true, 'Please provide the title' ]
	}
});

export default mongoose.models.Job || mongoose.model('Job', JobSchema);
