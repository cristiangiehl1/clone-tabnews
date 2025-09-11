import z from "zod";

export const signUpSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
