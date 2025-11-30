import { supabase } from "@/integrations/supabase/client";
import { UserProfile } from "@/types/userProfile";

export const getProfile = async (userId: string): Promise<{ data: UserProfile | null; error: any }> => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  return { data: data as UserProfile | null, error };
};

export const updateProfile = async (userId: string, updates: Partial<UserProfile>): Promise<{ error: any }> => {
  const { error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", userId);

  return { error };
};
