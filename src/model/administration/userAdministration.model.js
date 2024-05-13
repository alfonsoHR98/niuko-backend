import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
import Area from "./area.model.js";
import Employment from "./employment.model.js";
import Office from "./office.model.js";
import Salary from "./salary.model.js";

const UserAdministration = sequelize.define(
  "userAdministration",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
    dateAdmision: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dateDeparture: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    contract: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    idOffice: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    idArea: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    idSalary: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    idEmployment: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  },
  {}
);

// Relacion 1 a n con Office
UserAdministration.belongsTo(Office, {
  foreignKey: "idOffice",
});

Office.hasMany(UserAdministration, {
  foreignKey: "idOffice",
});

// Relacion 1 a n con Area
UserAdministration.belongsTo(Area, {
  foreignKey: "idArea",
});

Area.hasMany(UserAdministration, {
  foreignKey: "idArea",
});

// Relacion 1 a n con Employment
UserAdministration.belongsTo(Employment, {
  foreignKey: "idEmployment",
});

Employment.hasMany(UserAdministration, {
  foreignKey: "idEmployment",
});

Salary.hasOne(UserAdministration, {
  foreignKey: "idSalary",
});

UserAdministration.belongsTo(Salary, {
  foreignKey: "idSalary",
});

export default UserAdministration;
