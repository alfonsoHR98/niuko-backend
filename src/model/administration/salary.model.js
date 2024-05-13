import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";

const Salary = sequelize.define(
  "Salary",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    dailySalary: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    baseSalary: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    baseSalaryIMSS: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    integratedSalary: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {}
);

export default Salary;
