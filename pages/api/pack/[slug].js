import nextConnect from "next-connect";
import middleware from "../../../middleware/database";

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
	const {
		query: { slug },
	} = req;
	console.log("query: " + slug);
	console.log("request: " + req);
	let doc = await req.db.collection("packs").find({ title: slug }).toArray();
	res.json(doc);
});

export default handler;
