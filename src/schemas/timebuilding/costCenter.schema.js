import { z } from "zod";

export const createCostCenterSchema = z.object({
  name: z.string(),
  costCenterKey: z.string(),
});

export const updateCostCenterSchema = z.object({
  name: z.string().optional(),
  costCenterKey: z.string().optional(),
});
