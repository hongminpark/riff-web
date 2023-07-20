import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabaseUrl = "https://pjppxzzeyhoubdlhsdqu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcHB4enpleWhvdWJkbGhzZHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwNDI5MTAsImV4cCI6MjAwNDYxODkxMH0.vyHkI0fl-iZ1ryktPcl_467c7UaMbSyTJwtGLlpoveA";

interface Sticker {
  id: number;
  image_url: string;
}

export const fetchStickers = async (
  start: number,
  count: number
): Promise<Sticker[]> => {
  const { data, error } = await supabase
    .from("stickers")
    .select("id, image_url")
    .eq("is_activated", true)
    .order("id", { ascending: true })
    .range(start, start + count - 1);

  if (error) throw error;
  if (!data) return [];

  return data;
};

export const supabase = createClient(supabaseUrl, supabaseKey);
