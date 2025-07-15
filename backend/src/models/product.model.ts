import { Schema, model } from 'mongoose';

interface IProduct {
  name: string;
  price: number;
  category: string;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }
  },
  { timestamps: true }
);

export default model<IProduct>('Product', productSchema);
