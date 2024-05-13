import { z } from "zod";

export const createProyectOfficeSchema = z.object({
  idProyect: z.uuid({ required_error: "El idProyect es requerido" }),
  idOffice: z.uuid({ required_error: "El idOffice es requerido" }),
});

export const updateProyectOfficeSchema = z.object({
  idProyect: z.uuid().optional(),
  idOffice: z.uuid().optional(),
});
