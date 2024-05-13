import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import Area from "../administration/area.model.js"

const Service = sequelize.define(
  "Service",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    serviceKey: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    idArea: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {}
);

Service.belongsTo(Area, {
  foreignKey: "idArea",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Area.hasMany(Service, {
  foreignKey: "idArea",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default Service;
