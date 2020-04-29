export default async (req, res) => {
	if (req.body == process.env.uspadmin) {
		res.status(200).json({ response: true });
	} else {
		res.status(200).json({ response: false });
	}
};
