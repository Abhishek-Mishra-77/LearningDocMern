import Sequelize from "sequelize";
import sequelize from "../utils/database.js";

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false 
    }
});

export default User;
