import { createClient } from "@supabase/supabase-js";

export interface Sticker {
  id: number;
  image_url: string;
  promt: string;
}

export const fetchStickers = async (
  start: number,
  count: number
): Promise<Sticker[]> => {
  const { data, error } = await supabase
    .from("stickers")
    .select("id, image_url, prompt")
    .eq("is_activated", true)
    .eq("is_ai_generated", true)
    .order("id", { ascending: false })
    .range(start, start + count - 1);

  if (error) throw error;
  if (!data) return [];

  return data;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
export default supabase;
