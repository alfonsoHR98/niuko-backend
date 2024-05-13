import { z } from 'zod';

export const userInfoRegisterSchema = z.object({
    idUser: z.string().uuid(),
    idInsurance: z.string().uuid(),
    idAddress: z.string().uuid(),
    idAdministration: z.string().uuid(),
});
