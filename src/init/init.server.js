import dotenv from "dotenv";
import express from 'express';

import { connectMongoDBCloud } from "../configuration/connectDB.js";
import initBaseMiddleware from "../middleware/base.middleware.js";
import initRouter from "../route/init.route.js";

dotenv.config();
const port = process.env.PORT;
const app = express();

const initServer = () => {
    initBaseMiddleware(app, express);

    connectMongoDBCloud();
    
    initRouter(app);

    app.listen(port, () => {
        console.log(`order-service is running on http://localhost:${port}`)
    })
}

export default initServer;
