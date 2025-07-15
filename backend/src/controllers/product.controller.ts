import { Request, Response } from 'express';
import Product from '../models/product.model';

export const searchProducts = async (req: Request, res: Response) => {
  const { q } = req.query;                // /api/products/search?q=teclado
  if (!q || typeof q !== 'string') {
    return res.status(400).json({ message: 'Query param "q" is required' });
  }
  // Búsqueda parcial e insensible a mayúsculas
  const regex = new RegExp(q, 'i');
  const products = await Product.find({ name: regex });
  res.json(products);
};
