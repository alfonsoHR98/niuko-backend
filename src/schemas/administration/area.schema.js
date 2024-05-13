import { z } from "zod";

export const officeRegisterSchema = z.object({
  name: z.string({ required_error: "Escriba un nombre" }).min(3).max(255),
  abreviation: z.string(),
});

export const officeUpdateSchema = z.object({
  name: z
    .string({ required_error: "Escriba un nombre" })
    .min(3)
    .max(255)
    .optional(),
  abreviation: z.string().optional,
});
