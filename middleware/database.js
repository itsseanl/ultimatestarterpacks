import { MongoClient } from "mongodb";
import nextConnect from "next-connect";
const uri = `mongodb+srv://admin:${process.env.mongo_pw}@usp-hl1eo.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();

  req.dbClient = client;
  req.db = client.db("USP");
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
