import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.PORT || 4000;
const uri = process.env.MONGO_URI as string;

mongoose
  .connect(uri)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
  })
  .catch(err => console.error(err));
