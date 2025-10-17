import { z } from "zod";
export const registerSchema = z
  .object({
    email: z.email().min(1, "Email is required"),
    password: z
      .string()
      .min(6, "Password must contain at least 6 characters")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Password must contain at least one Uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one Number ")
      .regex(
        /[^a-bA-Z0-9]/,
        "Password must contain at least one special character"
      )
      .regex(
        /[^\s*$]/,
        "Password cannot be empty and empty space is not allowed"
      )
      .trim(),
    confirm_password: z.string().min(6, "Please confirm your password"),
    name: z.string().min(1, "Your name is required"),
    age: z.coerce.number<number>().min(1, "Age is required"),
    picture: z.string().optional(),
    location: z.string().optional(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Password do not match",
    path: ["confirm_password"],
  });
export type registerType = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.email("Invalid email address").min(1, "Email is required"),
  password: z.string(),
});
export type loginType = z.infer<typeof loginSchema>;

export const resetPasswordSchema = z
  .object({
    token: z.string(),
    new_password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^\s*$]/,
        "Password cannot be empty and empty space is not allowed"
      )
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character"
      ),
    confirm_password: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters long"),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

const forgotPasswordSchema = z.object({
  email: z.email("Invalid email address").min(1, "Email is required"),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
