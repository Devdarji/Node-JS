const dbConnect = require('./mongodb');
// const { MongoClient } = require('mongodb');
// const database = 'node-db'
// const url = 'mongodb://localhost:27017'
// const client = new MongoClient(url);


// async function getData() {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('e-comm');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();

// async function dbConnect() {
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('e-comm');
// }



// Connect Database with Another File

const connection = async () => {
    let connect = await dbConnect();
    let result = await connect.find({ name: 'Oppo A9' }).toArray();
    console.log(result);
}

connection();