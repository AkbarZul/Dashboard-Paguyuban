import { REQUIRED } from "@/constans/errorMessages";
import { z } from "zod";

const schema = z.object({
  chairman: z.string().trim().min(1, REQUIRED).max(255),
  viceChairman: z.string().trim().min(1, REQUIRED).max(255),
  rt: z.string().trim().min(1, REQUIRED).max(255),
  rw: z.string().trim().min(1, REQUIRED).max(255),
  village: z.string().trim().min(1, REQUIRED).max(255),
});

export default schema;

export type FormValues = z.infer<typeof schema>;
