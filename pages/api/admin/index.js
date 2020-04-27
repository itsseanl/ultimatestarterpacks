import fs from "fs";

export default async (req, res) => {
	console.log(req);
	// upload.single(req.body);
	try {
		var base64Data = req.body.replace("data:image/jpeg;base64,", "");
		console.log(req.body);
		var theDate = Date.now();
		fs.writeFileSync(`./uploads/${theDate}test.jpg`, base64Data, {
			encoding: "base64",
		});
		//file written successfully
		console.log("wrote file");
		res.status(200).json({ response: `./uploads/${theDate}test.jpg` });
	} catch (err) {
		console.error(err);
		res.status(200).json({ response: err });
	}
};
