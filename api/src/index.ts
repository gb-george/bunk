import express from 'express';
import cors from 'cors';
import { PayoutsRouter } from './routes';


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/payouts', PayoutsRouter);



// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

