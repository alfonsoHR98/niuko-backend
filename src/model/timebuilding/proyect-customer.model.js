import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import Customer from "./customer.model.js";
import Proyect from "./proyect.model.js";

const ProyectCustomer = sequelize.define(
  "ProyectCustomer",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    idProyect: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    idCustomer: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {}
);

// Relacion ProyectCustomer - Proyect
ProyectCustomer.belongsTo(Proyect, {
  foreignKey: "idProyect",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Proyect.hasMany(ProyectCustomer, {
  foreignKey: "idProyect",
});

// Relacion ProyectCustomer - Customer
ProyectCustomer.belongsTo(Customer, {
  foreignKey: "idCustomer",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Customer.hasMany(ProyectCustomer, {
  foreignKey: "idCustomer",
});

export default ProyectCustomer;
