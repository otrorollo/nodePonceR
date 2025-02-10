// NodePonceR/models/Product.js

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  price: Number,
  image: String,
  tags: [String],
}, { timestamps: true });

export default mongoose.model('Product', productSchema);