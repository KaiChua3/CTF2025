import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ulhggnbuegflgmequjep.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsaGdnbmJ1ZWdmbGdtZXF1amVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NzU4ODMsImV4cCI6MjA1ODM1MTg4M30.pEPuSh6neQ9dGKX_eSa59f18UlHy3uvKlgq8M66AG3E';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);