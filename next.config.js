require("dotenv").config();

module.exports = {
	env: {
		mongo_pw: process.env.mongo_pw,
		uspadmin: process.env.uspadmin,
	},
};
