import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/services/supabase";

export type User = {
  id: string;
  email: string;
};

export const useUser = () => {
  return useQuery<User | null>({
    queryKey: ["user"],
    queryFn: async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) throw error;

      if (!data.user) return null;

      return {
        id: data.user.id,
        email: data.user.email ?? "",
      };
    },
    staleTime: Infinity,
    retry: false,
  });
};
