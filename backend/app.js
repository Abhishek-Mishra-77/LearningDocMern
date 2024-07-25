import express from "express";
const app = express();
import sequelize from "./utils/database.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

app.use(cors());
app.use(express.json());

app.use("/", userRoutes);

sequelize.sync({ force: false })
    .then(() => {
        app.listen(4000, () => {
            console.log(`Server is running on port ${4000} , and Database connected`);
        })
    })

