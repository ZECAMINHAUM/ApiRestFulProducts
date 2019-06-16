const mongo = require('mongoose');

const Product = mongo.model('Product');

module.exports = {
    //Show all products
    async index (req, res){
        try {
            const products = await Product.find()
            .then(data => res.status(200).json({ success: true, data }))
            .catch(err => {
                return res.status(400).json({success: false, err});
            });

        }catch(err){
            return res.status(400).json({success: false, err});
        }
    },

    //Show details from product
    async show(req, res){ 
        try{
            const product = await Product.findById(req.params.id)
            .then(data => res.status(200).json({success: true, data}))
            .catch(err => res.status(400).json({ success: false, err }));
            
        }catch(err){
            return res.status(400).json({success: false, err});
        }
    },

    //create product
    async store(req, res){
        try {
            const product = await Product.create(req.body)
            .then(data => res.status(200).json({success: true}))
            .catch(err => res.status(400).json({success: false, err}));
        } catch (err) {
            return res.status(400).json({success: false, err});
        }
    },

    //Update a existent product
    async update(req,res){
       try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(data => res.status(200).json({sucess: true}))
        .catch(err => res.status(400).json({success: false, err}));
       }catch(err){
           return res.status(400).json({success: false, err});
       }
    },
    
    //Delete a existent product
    async destroy(req, res){
        try{ 
            await Product.findByIdAndDelete(req.params.id)
            .then(() => res.json({sucess: true}))
            .catch(err => res.status(400).json({success: false, err}));
        }catch (error){
            return res.status(400).json({success: false, err});
        }
     
    }
}