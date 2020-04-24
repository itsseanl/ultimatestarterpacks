import { MongoClient } from "mongodb";
const assert = require("assert");

export default async (req, res) => {
  const uri = `mongodb+srv://admin:${process.env.mongo_pw}@usp-hl1eo.mongodb.net/test?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, { useNewUrlParser: true });
  const dbName = "USP";
  // Use connect method to connect to the Server
  client.connect(function(err) {
    assert.equal(null, err);
    // console.log("Connected successfully to server");

    const db = client.db(dbName);
    const query = { title: req.body.title };
    const likes = { $set: { likes: parseInt(req.body.likes) + 1 } };
    db.collection("packs").updateOne(query, likes, function(err, res) {
      if (err) throw err;
      // console.log("1 document updated");
    });

    client.close();
  });
  res.send(parseInt(req.body.likes) + 1);
};
