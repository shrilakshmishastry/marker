import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: [ true, 'Please provide user name' ]
	},
	email: {
		type: String,
		required: [ true, 'Please provide email' ]
	},
	password: {
		type: String,
		required: [ true, 'Please provide password' ]
	}
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
