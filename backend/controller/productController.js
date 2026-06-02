import productModel from '../models/product.js';

export const getProducts = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;

        const limit = 12;
        const totalProducts = await productModel.countDocuments()
        const totalPage = Math.ceil(totalProducts / limit)

        const products = await productModel.find().limit(limit).skip((page - 1) * limit);
        res.status(200).json({ status: true, msg: 'product find sucessfull', products, page, totalPage, totalProducts })
    } catch (error) {
        res.status(400).json({ status: false, msg: 'internal server error' });
    }
}

export const singleProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productModel.find({ uid: productId });

        res.status(200).json({ status: true, product })
    } catch (error) {
        res.status(400).json({ status: false, msg: 'internal server error' });
    }
}

export const relatedProducts = async (req, res) => {
    try {
        const { category } = req.query;
        const products = await productModel.find({ category: category }).limit(6).select('uid poster rating title  category brand price -_id')
        res.status(200).json({ status: true, products })
    } catch (error) {
        res.status(400).json({ status: false, msg: 'internal server error' });
    }
}

export const searchProducts = async (req, res) => {
    try {
        const { q } = req.query;
        
        const filter = {};
        if (q) {
            filter.$or = [
                { title: { $regex: q, $options: 'i' } },
                { brand: { $regex: q, $options: 'i' } },
                { description: { $regex: q, $options: 'i' } },
                { slug: { $regex: q, $options: 'i' } },
            ]
        }
        if (req.query.category) filter.category = req.query.category;
    
        const products = await productModel.find(filter)
        res.status(200).json({ status: true, products })
    } catch (error) {
        res.status(400).json({ status: false, msg: 'internal server error' });
    }
}