import Userinfo from "../../model/users/userInfo.model.js";

export const createUserInfo = async (req, res, next) => {
  const { idUser, idInsurance, idAddress, idAdministration } = req.body;

  try {
    const newUserinfo = await Userinfo.create({
      idUser,
      idInsurance,
      idAddress,
      idAdministration,
    });
    return res.json({ message: "Usuario creado", data: newUserinfo });
  } catch (error) {
    next(error);
  }
};

export const updateUserInfo = async (req, res, next) => {
  const { id } = req.params;
  const userinfo = await Userinfo.findOne({ where: { id } });
  
  if (!userinfo) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  userinfo.set(req.body);
  await userinfo.save();
  return res.json({ message: "Usuario actualizado", data: userinfo });
};

export const deleteUserInfo = async (req, res, next) => {
  const { id } = req.params;
  const userinfo = await Userinfo.destroy({ where: { id } });
  if (!userinfo) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }
  return res.sendStatus(204);
};