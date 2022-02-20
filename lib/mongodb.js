// import { MongoClient } from 'mongodb';

// const uri = process.env.mongoDbClient;
// console.log(uri);
// const options = {};

// let client;
// let clientPromise;

// if (!process.env.mongoDbClient) {
// 	throw new Error('add url');
// }
// console.log(uri);
// if (process.env.NODE_ENV === 'development') {
// 	if (!global._mongoclientPromise) {
// 		client = new MongoClient(uri, options);
// 		global._mongoclientPromise = client.connect();
// 	}
// 	clientPromise = global._mongoclientPromise;
// } else {
// 	client = new MongoClient(uri, options);
// 	clientPromise = client.connect();
// }

// export default clientPromise;

import mongoose from 'mongoose';

const MONGODB_URI = process.env.mongoDbClient;
console.log(process.env.mongoDbClient);
// if (!process.env.mongoDbClient) {
// 	throw new Error('Please enter valid url');
// }

let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
	if (cached.conn) {
		return cached.conn;
	}
	if (!cached.promise) {
		const opts = {
			bufferCommands: false
		};
		cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
			return mongoose;
		});
		cached.conn = await cached.promise;
		return cached.conn;
	}
}

export { dbConnect };
