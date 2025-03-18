import express, { Application } from 'express';
import userRoutes from './routes/userRoute';

const app: Application = express();

app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
