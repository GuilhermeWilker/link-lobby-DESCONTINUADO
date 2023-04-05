import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://htnkflatuousbeuhuxmz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0bmtmbGF0dW91c2JldWh1eG16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1NDUzOTksImV4cCI6MTk5NjEyMTM5OX0.LQ_WJOrZ988IPh2qdIfgO-L7C4K1W18t6tneCcWX1q8";

export const supabase = createClient(supabaseUrl, supabaseKey);
