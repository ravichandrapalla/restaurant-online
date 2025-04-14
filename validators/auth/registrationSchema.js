// validators/registrationSchema.ts

import { z } from "zod";

export const BaseRegistrationSchema = z.object({
  firstName: z.string().min(3, "First Name must be at least 3 characters long"),
  lastName: z.string().min(3, "Last name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPassword: z
    .string()
    .min(6, "Confirm password must be at least 6 characters long"),
});

export const RegistrationSchema = BaseRegistrationSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  }
);
