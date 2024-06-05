import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors());

app.use(express.json({ limit: "900kb" }));
app.use(express.urlencoded({ extended: true, limit: "900kb" }));
app.use(cookieParser());

// route

import taskRoute from "./routes/task.route.js"

// route declaration
app.get('/', (_, resp) => {
    resp.send('Hello Node.js');
});

app.use("/api/v1/task", taskRoute)

export { app }