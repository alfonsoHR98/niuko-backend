import { z } from 'zod';

export const insuranceRegisterSchema = z.object({
    num: z.number.int(),
    beneficiary: z.string({ required_error: 'Escriba un beneficiario' }).min(3).max(255),
});

export const insuranceUpdateSchema = z.object({
    num: z.number.int().optional(),
    beneficiary: z.string({ required_error: 'Escriba un beneficiario' }).min(3).max(255).optional(),
});