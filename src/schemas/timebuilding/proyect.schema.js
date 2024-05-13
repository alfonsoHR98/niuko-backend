import { z } from "zod";

export const createProyectSchema = z.object({
  key: z.string(),
  name: z.string(),
  startDate: z.date(),
  endDate: z.date(),
});

export const updateProyectSchema = z.object({
  key: z.string().optional(),
  name: z.string().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
});
