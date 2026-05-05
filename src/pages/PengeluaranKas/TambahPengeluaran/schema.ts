import { REQUIRED } from "@/constans/errorMessages";
import { z } from "zod";

const schema = z.object({
  keterangan: z.string().trim().min(1, REQUIRED).max(255),
  kategori: z.number().min(1, REQUIRED).max(255),
  penerima: z.string().trim().min(1, REQUIRED).max(255),
  nominal: z.number().min(1, REQUIRED),
});

export default schema;

export type FormValues = z.infer<typeof schema>;
