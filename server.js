import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

import productsRouter from "./routes/products.js";
import arrivalsRouter from "./routes/arrivals.js";
import usersRouter from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);
app.use("/arrivals", arrivalsRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
    res.json({ message: "API is running" });
});

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

let activeSessions = 0;

io.on("connection", (socket) => {
    activeSessions++;

    io.emit("sessions", activeSessions);

    console.log("User connected", activeSessions);

    socket.on("disconnect", () => {
        activeSessions--;
        io.emit("sessions", activeSessions);
        console.log("User disconnected", activeSessions);
    });
});

httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});