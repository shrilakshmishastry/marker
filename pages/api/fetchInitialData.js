import { dbConnect } from 'lib/mongodb';
import jobModel from '../../src/models/Job';
async function fetchInitialData(req, res) {
	try {
		await dbConnect();
		const result = await jobModel.find({});

		const jobs = result.map((value, index, array) => {
			const job = value.toObject();
			return job;
		});

		res.statusCode = 200;
		res.end(JSON.stringify(jobs));
	} catch (e) {
		console.log(e);
		res.statusCode = 401;
		res.end();
	}
}

export default fetchInitialData;
