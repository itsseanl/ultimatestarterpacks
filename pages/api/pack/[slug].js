import nextConnect from "next-connect";
import middleware from "../../../middleware/database";

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
	//get slug from requesting page
	const {
		query: { slug },
	} = req;
	console.log("query: " + slug);
	console.log("request: " + req);
	//get single item and return
	let doc = await req.db.collection("packs").find({ title: slug }).toArray();
	res.json(doc);
});

export default handler;
