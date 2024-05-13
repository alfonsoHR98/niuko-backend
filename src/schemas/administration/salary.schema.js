import { z } from 'zod';

export const officeRegisterSchema = z.object({
    dailySalary: z.number().positive(),
    baseSalaryIMSS: z.number().positive(),
    dintegratedSalary: z.number().positive(),
});

export const officeUpdateSchema = z.object({
    dailySalary: z.number().positive().optional(),
    baseSalaryIMSS: z.number().positive().optional(),
    dintegratedSalary: z.number().positive().optional(),
});