import { z } from 'zod';

export const areaRegisterSchema = z.object({
    name: z.string({required_error: 'Escriba un nombre'}).min(3).max(255),
    abreviation: z.enum(['SLP','AGS','QRO']),
});

export const areaUpdateSchema = z.object({
    name: z.string({required_error: 'Escriba un nombre'}).min(3).max(255).optional(),
    abreviation: z.enum(['SLP','AGS','QRO']).optional,
});
