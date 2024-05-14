import bcrypy from "bcrypt";
import { createAccessToken } from "../../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET, ORIGIN } from "../../config.js";
import User from "../../model/users/user.model.js";
import UserInfo from "../../model/users/userInfo.model.js";
import Address from "../../model/users/address.model.js";
import Insurance from "../../model/users/insurance.model.js";
import UserAdministration from "../../model/administration/userAdministration.model.js";
import Office from "../../model/administration/office.model.js";
import Area from "../../model/administration/area.model.js";
import Salary from "../../model/administration/salary.model.js";
import Employment from "../../model/administration/employment.model.js";
import moment from "moment-timezone";

// FUNCIONES DE USUARIOS
export const createUser = async (req, res, next) => {
  const data = req.body;

  try {
    const hashedPassword = await bcrypy.hash(data.password, 10);

    const fieldsToCheck = ["username", "nss", "curp", "email", "rfc"];
    for (let field of fieldsToCheck) {
      let existingUser = await User.findOne({
        where: { [field]: data[field] },
      });
      if (existingUser) {
        return res.status(400).json({
          message: `El campo ${field} con valor ${data[field]} ya existe`,
        });
      }
    }

    const newUser = await User.create({
      firstName: data.firstName,
      lastName: data.lastName,
      birthDate: data.birthDate,
      phone: data.phone,
      civilState: data.civilState,
      nationality: data.nationality,
      password: hashedPassword,
      role: data.role,
      username: data.username,
      nss: data.nss,
      curp: data.curp,
      email: data.email,
      rfc: data.rfc,
      abreviation: data.abreviation,
    });

    return res.json({ message: "Usuario creado", data: newUser });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      const field = error.errors[0].path;
      return res.status(400).json({ message: `El campo ${field} ya existe` });
    }
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["password", "username", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: UserInfo,
          attributes: {
            exclude: [
              "idUser",
              "createdAt",
              "updatedAt",
              "idInsurance",
              "idAddress",
              "idAdministration",
            ],
          },
          include: [
            {
              model: Address,
              attributes: {
                exclude: ["idUser", "createdAt", "updatedAt"],
              },
            },
            {
              model: Insurance,
              attributes: {
                exclude: ["idUser", "createdAt", "updatedAt"],
              },
            },
            {
              model: UserAdministration,
              attributes: {
                exclude: [
                  "idEmployment",
                  "idSalary",
                  "idUser",
                  "createdAt",
                  "updatedAt",
                  "idOffice",
                  "idArea",
                ],
              },
              include: [
                {
                  model: Office,
                  attributes: {
                    exclude: ["idArea", "createdAt", "updatedAt"],
                  },
                },
                {
                  model: Area,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"],
                  },
                },
                {
                  model: Salary,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"],
                  },
                },
                {
                  model: Employment,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"],
                  },
                },
              ],
            },
          ],
        },
      ],
    });
    return res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id, {
      attributes: {
        exclude: ["password", "username", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: UserInfo,
          attributes: {
            exclude: [
              "idUser",
              "createdAt",
              "updatedAt",
              "idInsurance",
              "idAddress",
              "idAdministration",
            ],
          },
          include: [
            {
              model: Address,
              attributes: {
                exclude: ["idUser", "createdAt", "updatedAt"],
              },
            },
            {
              model: Insurance,
              attributes: {
                exclude: ["idUser", "createdAt", "updatedAt"],
              },
            },
            {
              model: UserAdministration,
              attributes: {
                exclude: [
                  "idEmployment",
                  "idSalary",
                  "idUser",
                  "createdAt",
                  "updatedAt",
                  "idOffice",
                  "idArea",
                ],
              },
              include: [
                {
                  model: Office,
                  attributes: {
                    exclude: ["idArea", "createdAt", "updatedAt"],
                  },
                },
                {
                  model: Area,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"],
                  },
                },
                {
                  model: Salary,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"],
                  },
                },
                {
                  model: Employment,
                  attributes: {
                    exclude: ["createdAt", "updatedAt"],
                  },
                },
              ],
            },
          ],
        },
      ],
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res.json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  user.set(req.body);
  await user.save();

  return res.json({
    message: "Usuario actualizado",
    data: user,
  });
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.destroy({ where: { id } });
  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }
  return res.sendStatus(204);
};

// FUNCIONES DE AUTENTICACIÓN
export const signin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isValid = await bcrypy.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = await createAccessToken({
      id: user.id,
      role: user.role,
      username: user.username,
    });

    res.cookie("token", token, {
      secure: true,
      SameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.json({ message: "Sesión iniciada", data: user });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const signout = async (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Sesión cerrada" });
};

export const profile = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    const payload = jwt.verify(token, TOKEN_SECRET);
    return res.json({
      id: payload.id,
      role: payload.role,
      username: payload.username,
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "No autorizado" });
  }
};
