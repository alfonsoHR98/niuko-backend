import { z } from "zod";

export const createProyectUserSchema = z.object({
  idProyect: z.uuid({ required_error: "El idProyect es requerido" }),
  idUser: z.uuid({ required_error: "El idUser es requerido" }),
});

export const updateProyectUserSchema = z.object({
  idProyect: z.uuid().optional(),
  idUser: z.uuid().optional(),
});
