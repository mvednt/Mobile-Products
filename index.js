const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/crud');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});

const saveInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "iPhone 14 Pro Max",
        price: 1299,
        brand: 'Apple',
        category: 'Mobile',

        name: "Oneplus 11Pro",
        price: 699,
        brand: 'Oneplus',
        category: 'Mobile',

    });
    const result = await data.save();
    console.log(result);
}

const updateInDB =async  () => {
    const Product = mongoose.model('products', productSchema);
    let data =await  Product.updateOne(
        { name: "iPhone 14 Pro Max" },
        {
            $set: { price: 1399,name:'iPhone 15 Pro Max' }
        }
    )
    console.log(data)
}

const deleteInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name:'Oneplus 11Pro'})
    console.log(data);
}
const findInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find({name:'iPhone 15 Pro Max'})
    console.log(data);
}

//saveInDB();
//updateInDB();
//deleteInDB();
//findInDB();