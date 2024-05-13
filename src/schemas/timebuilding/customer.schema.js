import { z } from "zod";

export const createCustomerSchema = z.object({
    name: z.string(),
    rfc: z.string().min(12).max(13),
});
    
export const updateCustomerSchema = z.object({
    name: z.string().optional(),
    rfc: z.string().min(12).max(13).optional(),
});