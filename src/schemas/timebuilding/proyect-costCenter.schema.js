import { z } from "zod";

export const createProyectCostCenterSchema = z.object({
  idProyect: z.uuid({ required_error: "El idProyect es requerido" }),
  idCostCenter: z.uuid({ required_error: "El idCostCenter es requerido" }),
});

export const updateProyectCostCenterSchema = z.object({
  idProyect: z.uuid().optional(),
  idCostCenter: z.uuid().optional(),
});
