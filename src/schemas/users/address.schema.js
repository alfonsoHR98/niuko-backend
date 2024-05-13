import { z } from 'zod';

export const addresRegisterSchema = z.object({
    street: z.string({required_error: 'Requiere un una calle'}).max(200).min(1),
    internalNumber: z.string(),
    internalNumber: z.string(),
    suburb: z.string({required_error: 'Requiere una dirección'}).max(100).min(1),
    cp: z.number({required_error: 'Ingrese un codigo postal correcto'}).int().positive().min(10000).max(99999),
});

export const addresUpdateSchema = z.object({
    street: z.string({required_error: 'Requiere un una calle'}).max(100).min(1).optional(),
    internalNumber: z.string().optional(),
    externalNumber: z.string().optional(),
    suburb: z.string({required_error: 'Requiere una dirección'}).max(100).min(1).optional(),
    cp: z.number({required_error: 'Ingrese un codigo postal correcto'}).int().positive().min(10000).max(99999).optional(),
});