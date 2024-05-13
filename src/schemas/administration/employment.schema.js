import { z } from 'zod';

export const officeRegisterSchema = z.object({
    name: z.string({required_error: 'Escriba un nombre'}).min(3).max(255),
    grade: z.string().min(3).max(255),
});

export const officeUpdateSchema = z.object({
    name: z.string({required_error: 'Escriba un nombre'}).min(3).max(255).optional(),
    grade: z.string().min(3).max(255).optional(),
});