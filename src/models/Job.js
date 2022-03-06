// import moment from 'moment';
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
// JobSchema.index(
// 	{ expire_at: 1 },
// 	{
// 		expireAfterSeconds: 0
// 	}
// );

export default mongoose.models.Job || mongoose.model('Job', JobSchema);
