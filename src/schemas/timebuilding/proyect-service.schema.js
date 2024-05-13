import { z } from "zod";

export const createProyectServiceSchema = z.object({
  idProyect: z.uuid({ required_error: "El idProyect es requerido" }),
  idService: z.uuid({ required_error: "El idService es requerido" }),
});

export const updateProyectServiceSchema = z.object({
  idProyect: z.uuid().optional(),
  idService: z.uuid().optional(),
});
