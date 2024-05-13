import { z } from "zod";

export const createProyectCustomerSchema = z.object({
  idProyect: z.uuid({ required_error: "El idProyect es requerido" }),
  idCustomer: z.uuid({ required_error: "El idCustomer es requerido" }),
});

export const updateProyectCustomerSchema = z.object({
  idProyect: z.uuid().optional(),
  idCustomer: z.uuid().optional(),
});
