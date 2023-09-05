import createProducts from '../../models/createProducts.js'
// import products from '../../models/createProducts.js';

const createProductss = async (req, res) => {
        const {description, name, posterUrl, price, quantity } = req.body;
        try{
            await createProducts.create({description, name, posterUrl, price, quantity }).then((products) => {
                res.status(201).json({message: "product created successfully", products});
            });
        } catch (err) {
            res.status(400).json({message: "product not created successfully", error: err.message });
        }
    }



export default createProductss;