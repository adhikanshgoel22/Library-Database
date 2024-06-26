import express from "express";
import http from "http";
import dotenv from "dotenv";
// import router from "./routes/loginRoute"; // Ensure the correct path to your route file
import './routes/loginRoute.js'
import router from "./routes/loginRoute.js";
import cors from 'cors';

dotenv.config(); // Load environment variables

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.json());
app.use('/api',router);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    console.log("SERVER connected");
});
