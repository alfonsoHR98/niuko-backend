import { sequelize } from "./db.js";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

// USERS ROUTES
import userRoutes from "./routes/users/user.routes.js";
import addressRoutes from "./routes/users/address.routes.js";
import insuranceRoutes from "./routes/users/insurance.routes.js";
import userInfoRoutes from "./routes/users/userInfo.routes.js";

// TIMEBUILDING ROUTES
import costCenterRoutes from "./routes/timebuilding/costCenter.routes.js";
import serviceRoutes from "./routes/timebuilding/service.routes.js";
import customerRoutes from "./routes/timebuilding/customer.routes.js";
import proyectRoutes from "./routes/timebuilding/proyect.routes.js";
import proyectAreaRoutes from "./routes/timebuilding/proyect-area.routes.js";
import proyectCostCenterRoutes from "./routes/timebuilding/proyect-costCenter.routes.js";
import proyectCustomerRoutes from "./routes/timebuilding/proyect-customer.routes.js";
import proyectManagerRoutes from "./routes/timebuilding/proyect-manager.routes.js";
import proyectOfficeRoutes from "./routes/timebuilding/proyect-office.routes.js";
import proyectServiceRoutes from "./routes/timebuilding/proyect-service.routes.js";
import proyectUserRoutes from "./routes/timebuilding/proyect-user.routes.js";
import proyectHourServiceRoutes from "./routes/timebuilding/proyect-hour-service.routes.js";

// ADMINISTRATIVE ROUTES
import officeRoutes from "./routes/administration/office.routes.js";
import areaRoutes from "./routes/administration/area.routes.js";
import salaryRoutes from "./routes/administration/salary.routes.js";
import employmentRoutes from "./routes/administration/employment.routes.js";
import userAdministrationRoutes from "./routes/administration/userAdministration.routes.js";

// EVALUATION ROUTES
import evaluationRoutes from "./routes/evaluation/evaluation.routes.js";
import evaluationUserRoutes from "./routes/evaluation/evaluation-user.routes.js";
import evaluationManagerUserRoutes from "./routes/evaluation/evaluation-manager-user.routes.js";
import evaluationResultRoutes from "./routes/evaluation/evaluation-result.routes.js";

import { ORIGIN } from "./config.js";

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

const app = express();

app.use(
  cors({
    origin: ORIGIN,
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => res.json({ message: "Welcome to Niuko SC" }));

// USERS ROUTES
app.use("/api", userRoutes);
app.use("/api", addressRoutes);
app.use("/api", insuranceRoutes);
app.use("/api", userInfoRoutes);

// ADMINISTRATIVE ROUTES
app.use("/api", officeRoutes);
app.use("/api", areaRoutes);
app.use("/api", salaryRoutes);
app.use("/api", employmentRoutes);
app.use("/api", userAdministrationRoutes);

// TIMEBUILDING ROUTES
app.use("/api", costCenterRoutes);
app.use("/api", serviceRoutes);
app.use("/api", customerRoutes);
app.use("/api", proyectRoutes);
app.use("/api", proyectAreaRoutes);
app.use("/api", proyectCostCenterRoutes);
app.use("/api", proyectCustomerRoutes);
app.use("/api", proyectManagerRoutes);
app.use("/api", proyectOfficeRoutes);
app.use("/api", proyectServiceRoutes);
app.use("/api", proyectUserRoutes);
app.use("/api", proyectHourServiceRoutes);

// EVALUATION ROUTES
app.use("/api", evaluationRoutes);
app.use("/api", evaluationUserRoutes);
app.use("/api", evaluationManagerUserRoutes);
app.use("/api", evaluationResultRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "ERROR",
    error: err,
    message: err.message,
  });
});

export default app;
