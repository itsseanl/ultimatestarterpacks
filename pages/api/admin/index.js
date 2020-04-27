import { MongoClient } from "mongodb";
import { Grid } from "mongodb";
import { mongo } from "mongodb";

const assert = require("assert");

export default async (req, res) => {
	// upload.single(req.body);
	const mongodb = require("mongodb");
	const uri = `mongodb+srv://admin:${process.env.mongo_pw}@usp-hl1eo.mongodb.net/test?retryWrites=true&w=majority`;

	const client = new mongodb.MongoClient(uri);
	client.connect(function (error) {
		assert.ifError(error);

		const db = client.db("USP");

		var bucket = new mongodb.GridFSBucket(db);

		let Duplex = require("stream").Duplex;
		let stream = new Duplex();
		stream.push(req.body);
		stream.push(null);

		stream
			.pipe(bucket.openUploadStream(Date.now() + ".jpg"))
			.on("error", function (error) {
				assert.ifError(error);
			})
			.on("finish", function () {
				console.log("done!");
				client.close();
			});
	});

	// try {
	// 	var base64Data = req.body.replace("data:image/jpeg;base64,", "");
	// 	console.log(req.body);
	// 	var theDate = Date.now();
	// 	fs.writeFileSync(`./public/images/${theDate}test.jpg`, base64Data, {
	// 		encoding: "base64",
	// 	});
	// 	//file written successfully
	// 	console.log("wrote file");
	// 	res.status(200).json({ response: `/images/${theDate}test.jpg` });
	// } catch (err) {
	// 	console.error(err);
	// 	res.status(200).json({ response: err });
	// }
};
