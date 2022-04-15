import axios from 'axios';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const jsdom = require('jsdom');
const linkPreviewGenerator = require('link-preview-generator');
const { JSDOM } = jsdom;

export default async function fetchPost(req, res) {
	console.log('ello');
	try {
		const previewData = await linkPreviewGenerator(req.query.url);
		console.log(previewData);
		res.statusCode = 200;
		res.end(JSON.stringify(previewData));
	} catch (e) {
		console.log(e);
		res.statusCode = 404;
		res.end();
	}
}
