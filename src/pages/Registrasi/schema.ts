import { EMAIL_INVALID, REQUIRED } from "@/constans/errorMessages";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, REQUIRED).max(255),
  homeNumber: z.string().trim().min(1, REQUIRED).max(255),
  email: z.string().trim().min(1, REQUIRED).email(EMAIL_INVALID).max(255),
  password: z.string().min(1, REQUIRED).max(255),
});

export default schema;

export type FormValues = z.infer<typeof schema>;
