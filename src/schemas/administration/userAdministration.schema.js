import { z } from 'zod';

export const userAdministrationRegisterSchema = z.object({
    idOffice: z.string().uuid(),
    dateAdmission: z.string().date(),
    dateDeparture: z.string().date(),
    contract: z.string().min(3).max(255),
    idArea: z.string().uuid(),
    idSalary: z.string().uuid(),
    idEmployment: z.string().uuid(),
});

export const serAdministrationUpdateSchema = z.object({
    dateAdmission: z.string().date().optional(),
    dateDeparture: z.string().date().optional(),
    contract: z.string().min(3).max(255).optional(),
});
