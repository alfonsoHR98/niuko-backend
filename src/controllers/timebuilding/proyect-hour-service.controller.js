import ProyectHourService from "../../model/timebuilding/proyect-hour-service.model.js";
import ProyectService from "../../model/timebuilding/proyect-service.model.js";
import Service from "../../model/timebuilding/service.model.js";
import Proyect from "../../model/timebuilding/proyect.model.js";
import User from "../../model/users/user.model.js";
import UserInfo from "../../model/users/userInfo.model.js";
import Area from "../../model/administration/area.model.js";
import Employment from "../../model/administration/employment.model.js";
import UserAdministration from "../../model/administration/userAdministration.model.js";
import Activity from "../../model/timebuilding/activity.model.js";
import { Op } from "sequelize";

export const getProyectHourService = async (req, res) => {
  const { startDate, endDate } = req.query;

  const proyectHourService = await ProyectHourService.findAll({
    where: {
      date: {
        [Op.between]: [new Date(startDate), new Date(endDate)],
      },
    },
    include: [
      {
        model: ProyectService,
        attributes: {
          exclude: ["createdAt", "updatedAt", "idProyect", "idService"],
        },
        include: [
          {
            model: Service,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
          {
            model: Proyect,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        ],
      },
      {
        model: Activity,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: User,
        attributes: ["id", "firstName", "lastName"],
        include: [
          {
            model: UserInfo,
            attributes: ["id"],
            include: [
              {
                model: UserAdministration,
                attributes: ["id"],
                include: [
                  {
                    model: Area,
                    attributes: ["id", "name"],
                  },
                  {
                    model: Employment,
                    attributes: ["id", "name", "grade"],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
  return res.json(proyectHourService);
};

// obtener ProyectHourService for idUser
export const getProyectHourServiceByIdUser = async (req, res, next) => {
  const { idUser } = req.params;
  const proyectHourService = await ProyectHourService.findAll({
    where: { idUser },
    include: [
      {
        model: ProyectService,
        attributes: {
          exclude: ["createdAt", "updatedAt", "idProyect", "idService"],
        },
        include: [
          {
            model: Service,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
          {
            model: Proyect,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        ],
      },
    ],
  });
  return res.json(proyectHourService);
};

// crear ProyectHourService
export const createProyectHourService = async (req, res, next) => {
  const { idProyectService, idUser, date, hours, description, idActivity } = req.body;

  try {
    const newProyectHourService = await ProyectHourService.create({
      idProyectService,
      idUser,
      date,
      hours,
      description,
      idActivity,
    });
    return res.json({
      message: "Relacion Proyecto - Servicio - Usuario creada",
      data: newProyectHourService,
    });
  } catch (error) {
    next(error);
  }
};

// actualizar ProyectHourService

export const updateProyectHourService = async (req, res) => {
  const { id } = req.params;
  const proyectHourService = await ProyectHourService.findOne({
    where: { id },
  });

  if (!proyectHourService) {
    return res.status(404).json({
      message: "Relacion Proyecto - Servicio - Usuario no encontrada",
    });
  }

  proyectHourService.set(req.body);
  await proyectHourService.save();
  return res.json({
    message: "Relacion Proyecto - Servicio - Usuario actualizada",
    data: proyectHourService,
  });
};

// eliminar ProyectHourService

export const deleteProyectHourService = async (req, res) => {
  const { id } = req.params;
  const proyectHourService = await ProyectHourService.destroy({
    where: { id },
  });
  if (!proyectHourService) {
    return res.status(404).json({
      message: "Relacion Proyecto - Servicio - Usuario no encontrada",
    });
  }
  return res.sendStatus(204);
};
