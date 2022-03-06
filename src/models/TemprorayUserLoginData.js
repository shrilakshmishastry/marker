import mongoose from 'mongoose';

const TempUserDataStore = new mongoose.Schema({
	email: {
		type: String,
		required: [ true, 'Please proivde the email' ]
	},
	token: {
		type: String,
		required: [ true, 'Please proivde the token' ]
	},
	expire_at: {
		type: Date,
		default: Date.now(),
		expires: 60
	}
});

TempUserDataStore.index(
	{ expire_at: 1 },
	{
		expireAfterSeconds: 3000
	}
);

export default mongoose.models.TempUserData || mongoose.model('TempUserData', TempUserDataStore);
