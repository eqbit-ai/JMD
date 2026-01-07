import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hpwalhafouxzmmxvhvdk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhwd2FsaGFmb3V4em1teHZodmRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3MjI2MDYsImV4cCI6MjA4MzI5ODYwNn0.-Jov55-Ob1RX2Cbtza6IM5eO0K-QbnS9iKmEaqUohUQ";

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);
