import Proyect from "../../model/timebuilding/proyect.model.js";
import CostCenter from "../../model/timebuilding/costCenter.model.js";
import Area from "../../model/administration/area.model.js";
import Customer from "../../model/timebuilding/customer.model.js";
import Office from "../../model/administration/office.model.js";
import Service from "../../model/timebuilding/service.model.js";
import User from "../../model/users/user.model.js";
import UserInfo from "../../model/users/userInfo.model.js";
import Employment from "../../model/administration/employment.model.js";
import UserAdministration from "../../model/administration/userAdministration.model.js";
import ProyectArea from "../../model/timebuilding/proyect-area.model.js";
import ProyectCostCenter from "../../model/timebuilding/proyect-costCenter.model.js";
import ProyectCustomer from "../../model/timebuilding/proyect-customer.model.js";
import ProyectManager from "../../model/timebuilding/proyect-manager.model.js";
import ProyectOffice from "../../model/timebuilding/proyect-office.model.js";
import ProyectService from "../../model/timebuilding/proyect-service.model.js";
import ProyectUser from "../../model/timebuilding/proyect-user.model.js";
import ProyectHourService from "../../model/timebuilding/proyect-hour-service.model.js";

import moment from "moment-timezone";

export const getProyects = async (req, res) => {
  try {
    const proyects = await Proyect.findAll({
      attributes: ["id", "key", "name", "startDate", "endDate"],
      include: [
        {
          model: ProyectCostCenter,
          attributes: {
            exclude: ["createdAt", "updatedAt", "idProyect", "idCostCenter"],
          },
          include: {
            model: CostCenter,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        },
        {
          model: ProyectArea,
          attributes: {
            exclude: ["createdAt", "updatedAt", "idProyect", "idArea"],
          },
          include: {
            model: Area,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        },
        {
          model: ProyectCustomer,
          attributes: {
            exclude: ["createdAt", "updatedAt", "idProyect", "idCustomer"],
          },
          include: {
            model: Customer,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        },
        {
          model: ProyectManager,
          attributes: {
            exclude: ["createdAt", "updatedAt", "idProyect", "idUser"],
          },
          include: {
            model: User,
            attributes: ["id", "firstName", "lastName", "abreviation"],
            include: {
              model: UserInfo,
              attributes: ["id"],
              include: {
                model: UserAdministration,
                attributes: ["id"],
                include: [
                  {
                    model: Area,
                  },
                  {
                    model: Employment,
                  },
                ],
              },
            },
          },
        },
        {
          model: ProyectOffice,
          attributes: {
            exclude: ["createdAt", "updatedAt", "idProyect", "idOffice"],
          },
          include: {
            model: Office,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        },
        {
          model: ProyectService,
          attributes: {
            exclude: ["createdAt", "updatedAt", "idProyect", "idService"],
          },
          include: [
            {
              model: Service,
              attributes: { exclude: ["createdAt", "updatedAt"] },
              include: {
                model: Area,
                attributes: { exclude: ["createdAt", "updatedAt"] },
              },
            },
            {
              model: ProyectHourService,
              attributes: {
                exclude: ["createdAt", "updatedAt", "idProyectService"],
              },
            },
          ],
        },
        {
          model: ProyectUser,
          attributes: {
            exclude: ["createdAt", "updatedAt", "idProyect", "idUser"],
          },
          include: {
            model: User,
            attributes: ["id", "firstName", "lastName", "abreviation"],
            include: {
              model: UserInfo,
              attributes: ["id"],
              include: {
                model: UserAdministration,
                attributes: ["id"],
                include: [
                  {
                    model: Area,
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                  },
                  {
                    model: Employment,
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                  },
                ],
              },
            },
          },
        },
      ],
    });
    res.json(proyects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get proyect by id

export const getProyectById = async (req, res) => {
  const { id } = req.params;
  try {
    const proyect = await Proyect.findByPk(id, {
      attributes: ["id", "key", "name", "startDate", "endDate"],
      include: [
        {
          model: ProyectCostCenter,
          attributes: {
            exclude: ["createdAt", "updatedAt", "idProyect", "idCostCenter"],
          },
          include: {
            model: CostCenter,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        },
        {
          model: ProyectArea,
          attributes: {
            exclude: ["createdAt", "updatedAt", "idProyect", "idArea"],
          },
          include: {
            model: Area,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        },
        {
          model: ProyectCustomer,
          attributes: {
            exclude: ["createdAt", "updatedAt", "idProyect", "idCustomer"],
          },
          include: {
            model: Customer,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        },
        {
          model: ProyectManager,
          attributes: {
            exclude: ["createdAt", "updatedAt", "idProyect", "idUser"],
          },
          include: {
            model: User,
            attributes: ["id", "firstName", "lastName", "abreviation"],
            include: {
              model: UserInfo,
              attributes: ["id"],
              include: {
                model: UserAdministration,
                attributes: ["id"],
                include: [
                  {
                    model: Area,
                  },
                  {
                    model: Employment,
                  },
                ],
              },
            },
          },
        },
        {
          model: ProyectOffice,
          attributes: {
            exclude: ["createdAt", "updatedAt", "idProyect", "idOffice"],
          },
          include: {
            model: Office,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        },
        {
          model: ProyectService,
          attributes: {
            exclude: ["createdAt", "updatedAt", "idProyect", "idService"],
          },
          include: {
            model: Service,
            attributes: { exclude: ["createdAt", "updatedAt"] },
            include: {
              model: Area,
              attributes: { exclude: ["createdAt", "updatedAt"] },
            },
          },
        },
        {
          model: ProyectUser,
          attributes: {
            exclude: ["createdAt", "updatedAt", "idProyect", "idUser"],
          },
          include: {
            model: User,
            attributes: ["id", "firstName", "lastName", "abreviation"],
            include: {
              model: UserInfo,
              attributes: ["id"],
              include: {
                model: UserAdministration,
                attributes: ["id"],
                include: [
                  {
                    model: Area,
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                  },
                  {
                    model: Employment,
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                  },
                ],
              },
            },
          },
        },
      ],
    });
    res.json(proyect);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create proyect

export const createProyect = async (req, res, next) => {
  const { key, name, startDate, endDate } = req.body;

  try {
    // Crea un nuevo proyecto sin validar si la clave es única
    const proyect = await Proyect.create({
      key,
      name,
      startDate: moment.utc(startDate).tz("America/Mexico_City"),
      endDate: moment.utc(endDate).tz("America/Mexico_City"),
    });

    return res.json({ message: "Proyecto creado", data: proyect });
  } catch (error) {
    next(error);
  }
};

// update proyect

export const updateProyect = async (req, res) => {
  const { id } = req.params;

  const proyect = await Proyect.findByPk(id);

  if (!proyect) {
    return res.status(404).send("Proyect not found");
  }

  proyect.set(req.body);
  await proyect.save();

  return res.json({
    message: "Proyect updated",
    data: proyect,
  });
};

// delete proyect

export const deleteProyect = async (req, res) => {
  const { id } = req.params;
  const proyect = await Proyect.destroy({ where: { id } });
  if (!proyect) {
    return res.status(404).send("Proyect not found");
  }
  return res.json({ message: "Proyect deleted" });
};
