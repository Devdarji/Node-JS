const { MongoClient } = require('mongodb');
const database = 'node-db'
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);


async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('e-comm');
}

module.exports = dbConnect;