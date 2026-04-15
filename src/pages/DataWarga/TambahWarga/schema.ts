import { REQUIRED } from "@/constans/errorMessages";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, REQUIRED).max(255),
  homeNumber: z.string().trim().min(1, REQUIRED).max(255),
  status: z.number().min(1, REQUIRED).max(255),
  phoneNumber: z.string().trim().min(1, REQUIRED).max(255)
});

export default schema;

export type FormValues = z.infer<typeof schema>;