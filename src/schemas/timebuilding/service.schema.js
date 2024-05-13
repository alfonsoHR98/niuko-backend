import { z } from "zod";

export const createServiceSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  serviceKey: z.string().optional(),
  idArea: z.uuid({ required_error: "El idArea es requerido" }),
});

export const updateServiceSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  serviceKey: z.string().optional(),
  idArea: z.uuid().optional(),
});
