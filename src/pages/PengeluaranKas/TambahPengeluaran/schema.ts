import { REQUIRED } from "@/constans/errorMessages";
import { z } from "zod";

const schema = z.object({
  information: z.string().trim().min(1, REQUIRED).max(255),
  category: z.number().min(1, REQUIRED).max(255),
  recipient: z.string().trim().min(1, REQUIRED).max(255),
  nominal: z.string().trim().min(1, REQUIRED).max(255),
});

export default schema;

export type FormValues = z.infer<typeof schema>;
