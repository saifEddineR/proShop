import express from 'express';
import connectDB from './config/connectDB.js';
import dotenv from 'dotenv';
import colors from 'colors';
// fixed
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import path from 'path';
import morgan from 'morgan';

const app = express();
app.use(express.json());
dotenv.config();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
//connect database
connectDB();
//import routes
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

// !routes
app.use('/api/upload', uploadRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}
// error handler
app.use(notFound);
app.use(errorHandler);

//server creation
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err
    ? console.log(err)
    : console.log(
        `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
      )
);
