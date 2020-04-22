import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
	console.log("request" + req);
	let doc = await req.db.collection("packs").find().toArray();
	res.json(doc);
});

export default handler;
