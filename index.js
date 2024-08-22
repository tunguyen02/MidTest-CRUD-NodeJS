import express from 'express';
import mongoose from 'mongoose';
import { RootRouterV1 } from './src/routes/index.js';

// await mongoose.connect('mongodb://localhost:27017');

const app = express();
app.use(express.json());

app.use('/api/v1', RootRouterV1);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});