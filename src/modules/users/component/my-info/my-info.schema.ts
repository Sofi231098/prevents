import * as z from 'zod';

export const schema = z.object({
    name: z.string().min(1, 'El nombre es obligatorio'),
    email: z.string().email('El correo electrónico no es válido'),
    description: z.string().optional(),
})

export type MyInfoSchema = z.infer<typeof schema>;