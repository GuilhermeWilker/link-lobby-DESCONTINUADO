import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pudbujzevllyojzdotwk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1ZGJ1anpldmxseW9qemRvdHdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4MDY1MTMsImV4cCI6MTk5NjM4MjUxM30.4VjpZDlv-y3sswhN7lurdaQiD2uQ1BwXRgzJfGkqEcY";

export const supabase = createClient(supabaseUrl, supabaseKey);
