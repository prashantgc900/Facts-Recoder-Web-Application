import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xqiazzzxddaptvuzenvh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxaWF6enp4ZGRhcHR2dXplbnZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc4MTgxMzMsImV4cCI6MjAwMzM5NDEzM30.rElfLorT-1CdAPGDh9tF50YkvAKhXLUQmdxiQwDehD4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
