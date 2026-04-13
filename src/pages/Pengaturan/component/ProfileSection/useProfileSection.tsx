import { useForm } from "react-hook-form";
import schema, { FormValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileDefaultValues, profileValues } from "./helper";

const useProfileSection = () => {
  const { control, ...form } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: profileDefaultValues,
    mode: "onChange",
    values: profileValues,
  });

  return {
    form: { control, ...form },
  };
};

export default useProfileSection;
