const dbConnect = require('../mongodb');

const insertData = async () => {
    const db = await dbConnect();
    const result = await db.insertOne(
        [
            { name: "Oppo 2", brand: "Oppo", price: 14000 },
        ]
    )
    // const result = await db.insertMany(
    //     [
    //         { name: "Oppo 2", brand: "Oppo", price: 14000 },
    //         { name: "Oppo 3", brand: "Oppo", price: 15000 },
    //         { name: "Oppo 4", brand: "Oppo", price: 16000 },
    //     ]
    // )

    if (result.acknowledged) {
        console.log(result);
    }
}


insertData();