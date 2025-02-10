import Product from '../models/Product.js';

async function getProducts(req, res, next) {
  try {
    const products = await Product.find();
    res.json({ results: products });
  } catch (error) {
    next(error);
  }
}

export default {
  getProducts
};
