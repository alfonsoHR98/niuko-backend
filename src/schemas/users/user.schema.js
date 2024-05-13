import { z } from "zod";

export const userRegisterSchema = z.object({
  firstname: z
    .string({ required_error: "Escriba un nombre correcto" })
    .min(1)
    .max(255),
  lastname: z
    .string({ required_error: "Escriba un apellido correcto" })
    .min(1)
    .max(255),
  birthday: z.string().date(),
  phone: z.string().min(8).max(15),
  rfc: z.string().min(12).max(13),
  email: z
    .string()
    .email({ message: "Introduzca un correo de manera correcta" }),
  curp: z.string().min(18).max(18),
  civilState: z.string(),
  nationality: z.string().min(1).max(255),
  nss: z.string().min(11).max(12),
  username: z.string().min(4).max(255),
  password: z.string().min(4).max(255),
  role: z.enum(["admin", "manager", "user"]),
});

export const userUpdateSchema = z.object({
  firstname: z
    .string({ required_error: "Escriba un nombre correcto" })
    .min(1)
    .max(255)
    .optional(),
  lastname: z
    .string({ required_error: "Escriba un apellido correcto" })
    .min(1)
    .max(255)
    .optional(),
  birthday: z.string().date().optional(),
  phone: z.string().min(8).max(15).optional(),
  rfc: z.string().min(12).max(13).optional(),
  email: z
    .string()
    .email({ message: "Introduzca un correo de manera correcta" })
    .optional(),
  curp: z.string().min(18).max(18).optional(),
  civilState: z.enum(["single", "married"]).optional(),
  nationality: z.string().min(1).max(255).optional(),
  nss: z.bigint().int().min(11).max(12).optional(),
  username: z.string().min(4).max(255).optional(),
  password: z.string().min(4).max(255).optional(),
  role: z.enum(["admin", "manager", "user"]).optional(),
});
