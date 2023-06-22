const Products = require("../models/product")

exports.createProduct = async(req, res) =>{
    
    try {
        let product;

        //create product
        product = new Products(req.body);

        await product.save();
        
        res.status(200).send(product);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }

}

exports.getProducts = async(req, res) => {

    try {

        const products = await Products.find();
        res.status(200).json(products);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
        
    }

}

exports.updateProduct = async(req, res) => {

    try {
        const  { name, category, ubication, price } = req.body;
        let product = await Products.findById(req.params.id);

        if(!product){
            res.status(404).json({msg: 'Product not found!'});
        }

        product.name = name;
        product.category = category;
        product.ubication = ubication;
        product.price = price;

        product = await Products.findOneAndUpdate({_id: req.params.id}, product, {new: true});
        res.status(200).json(product);


    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
        
    }
}

exports.getProduct = async(req, res) => {

    try {

        let product = await Products.findById(req.params.id);

        if(!product){
            res.status(404).json({msg: 'Product not found!'});
        }

        res.status(200).json(product);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
        
    }


}

exports.deleteProduct = async(req,res) => {

    try {

        let product = await Products.findById(req.params.id);

        if(!product){
            res.status(404).json({msg: 'Product not found!'});
        }

        await Products.findOneAndRemove({_id: req.params.id})

        res.status(200).json({msg:"product successfully removed"});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
        
    }
   
}