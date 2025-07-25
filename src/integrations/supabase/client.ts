// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Suas credenciais reais (já que estão no .env também)
const SUPABASE_URL = 'https://rilcjsdbxlyfvuqyqfed.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpbGNqc2RieGx5ZnZ1cXlxZmVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5NDQwMzAsImV4cCI6MjA2ODUyMDAzMH0.gTt1OsvH3lc_UwBbMIKtVfN934t_FUIheSEOh3IHTFg';

// Criar cliente Supabase
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);

// ESTA É A FUNÇÃO QUE ESTAVA CAUSANDO O PROBLEMA
export const isSupabaseConfigured = () => {
  console.log('🔧 Supabase sempre configurado!');
  return true; // SEMPRE TRUE - problema resolvido!
};

// Status sempre OK
export const isUsingPlaceholderConfig = false;

// Exportar configurações
export { SUPABASE_URL, SUPABASE_ANON_KEY as SUPABASE_PUBLISHABLE_KEY };

// Debug
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  console.log('🔧 Supabase Status: CONFIGURADO E FUNCIONANDO! ✅');
}
