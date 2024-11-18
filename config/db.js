const { MongoClient } = require("mongodb");
// const url = process.env.MONGODB_URI;
const url = 'mongodb+srv://admin:tanishq123@tanishq.mviri.mongodb.net/xeno?retryWrites=true&w=majority&appName=tanishq';
const dbName = "xeno-mini-crm";

let db;

const connectDB = async () => {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  db = client.db(dbName);
  console.log(`Connected to database: ${dbName}`);
};

const getDB = () => db;

module.exports = { connectDB, getDB };
