import { LoginPayload } from "@/types/authType";
import { supabase } from "./supabase";

export const authLogin = async ({ email, password }: LoginPayload) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
};

export const authLogout = async () => {
  await supabase.auth.signOut();
};
