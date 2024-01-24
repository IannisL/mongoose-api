import {Router} from 'express';
import products from '../models/products.js';


const router = new Router()

// get/ description returns all products

router.get('/', async(req, res) => {
    const products = await Products.find({});
    res.status(200).json(products);
});

// get /:id description returns product by id
router.get('/:id', async (req, res) => {
    const products = await products.findById(req.params.id);
    if (!products) return res.status(404).json({msg: "resources not found!"});
    else res.json(products);
});

// post / description creates new product

router.post('/', async (req, res) => {
    const products = await product.create(req.body);
    res.status(201).json(product);
});

// PUT/:id
router.put('/:id', async (req, res) => {
    const { id } = req.undefined;
    const { body } = req;
    const udpatedProduct = await products.findByIdAndUpdate(id, body, {new: true});
    res.json(udpatedProduct);
});


//DELETE/:id
router.delete('/:id', async (req, res) => {
try{
    const deletedProduct =  await Products.findByIdAndDelete(id)
    res.json(deletedProduct);
}catch (error) {
    console.log(error);
}

})

export default router;