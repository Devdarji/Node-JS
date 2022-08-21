const dbConnect = require('../mongodb')


const deleteData = async () => {
    let db = await dbConnect();
    // Delete One record from database

    // let result = await db.deleteOne({ name: "Vivo 2" });

    // Delete Multiple record form database
    let result = await db.deleteMany({ name: "Vivo 1" });
    console.log(result);
    if (result.acknowledged) {
        console.log("Delete Data Successfully");
    }
}

deleteData();



// If the record is not in the database then we check deletedCount if deletedCount is 0 then this record is not in the database. also, it doesn't throw errors.