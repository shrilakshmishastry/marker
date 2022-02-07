// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import linkPreviewGenerate from 'link-preview-generator';
// const getTitle = () =>{

// 	return ;
// }

export default async function fetchMeData(req, res) {
	try {
		const result = await linkPreviewGenerate(req.query.url);
		res.status(200).json({
			data: result
		});
	} catch (e) {
		console.log(e);
		res.status(404);
	}
}
