const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/node-db')

const eCommSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
});

// ============================== Add Data in DataBase
const saveData = async () => {
    const Product = mongoose.model("e-comm", eCommSchema);
    let data = new Product({name:"I phone 13", brand:"Apple", price:70000, category:"Mobile"})
    const result = await data.save()
    console.log(result);
}

// saveData()

// ============================== Update Data in DataBase
const updateData = async () => {
    const Product = mongoose.model("e-comm", eCommSchema);
    let data = await Product.updateOne(
        {name:"I phone 13"},
        {name:"I Phone 14 Pro", price: 15000}
        )
    console.log(data);
}

// updateData();

// ============================== Delete Data in DataBase
const deleteData = async () => {
    const Product = mongoose.model("e-comm", eCommSchema);
    const data = await Product.deleteOne({name:"I phone 13"})
    console.log(data);
}

// deleteData();

// ============================== Search Data in DataBase
const findData = async () => {
    const Product = mongoose.model("e-comm", eCommSchema);
    let data = await Product.find();
    console.log(data);
}


// findData()
