const dbConnect = require('../mongodb');

const updateData = async () => {
    let db = await dbConnect();
    // let result = await db.updateOne(
    //     { name: "Oppo 1" }, {
    //     $set: { name: "Vivo 1" }
    // }
    // )
    let result = await db.updateMany(
        { name: "Oppo 2" }, {
        $set: { name: "Vivo 2", price: 12000 }
    }
    )
    console.log(result);
}

updateData();