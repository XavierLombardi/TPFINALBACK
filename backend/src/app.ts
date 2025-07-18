import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/product.routes';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);

export default app;
