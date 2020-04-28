import { MongoClient } from "mongodb";
import { Grid } from "mongodb";
import { mongo } from "mongodb";
import fs from "fs";

var Binary = require("mongodb").Binary;
const assert = require("assert");

export const config = {
	api: {
		bodyParser: {
			sizeLimit: "50mb",
		},
	},
};

export default async (req, res) => {
	const mongodb = require("mongodb");
	const uri = `mongodb+srv://admin:${process.env.mongo_pw}@usp-hl1eo.mongodb.net/test?retryWrites=true&w=majority`;

	var fileName = Date.now();

	const client = new mongodb.MongoClient(uri, {
		poolSize: 10,
		bufferMaxEntries: 0,
		reconnectTries: 5000,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	const pack = JSON.parse(req.body);
	client.connect(function (error) {
		assert.ifError(error);
		const db = client.db("USP");
		db.collection("packs").insertOne(pack, function (err, resp) {
			if (err) throw err;
			console.log("1 document updated");
			db.collection("packs").find({ title: "unique2" }, function (err, resp) {
				//     fs.writeFile('vcout.exe', doc.bin.buffer, function(err){
				//         if (err) throw err;
				//         console.log('Sucessfully saved!');
				//   });
				console.log(resp);
			});
			res.status(200).json({ response: "ok" });
			client.close();
		});
	});
};
