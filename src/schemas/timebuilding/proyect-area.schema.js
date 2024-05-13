import { z } from "zod";

export const createProyectAreaSchema = z.object({
  idProyect: z.uuid({ required_error: "El idProyect es requerido" }),
  idArea: z.uuid({ required_error: "El idArea es requerido" }),
});

export const updateProyectAreaSchema = z.object({
  idProyect: z.uuid().optional(),
  idArea: z.uuid().optional(),
});
