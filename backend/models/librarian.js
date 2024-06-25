import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import bcrypt from "bcrypt";
const Librarian_details = sequelize.define("Librarian_details", {

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING,
    unique:true,
    validate:{
        isEmail:true
    }
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false

  }
  

});
Librarian_details.afterCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  });


export default Librarian_details;
