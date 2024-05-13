import { z } from "zod";

export const createProyectManagerSchema = z.object({
  idProyect: z.uuid({ required_error: "El idProyect es requerido" }),
  idManager: z.uuid({ required_error: "El idManager es requerido" }),
});

export const updateProyectManagerSchema = z.object({
  idProyect: z.uuid().optional(),
  idManager: z.uuid().optional(),
});
