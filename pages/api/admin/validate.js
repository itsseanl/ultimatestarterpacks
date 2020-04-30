export default async (req, res) => {
	console.log("env: " + process.env.uspadmin);
	if (req.body == process.env.uspadmin) {
		res.status(200).json({ response: true });
	} else {
		res.status(200).json({ response: false });
	}
};
