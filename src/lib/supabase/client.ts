import { createBrowserClient } from '@supabase/ssr'

/**
 * Creates a Supabase client for use in Client Components (browser).
 *
 * Uses the public NEXT_PUBLIC_ environment variables — safe to expose
 * in browser context. Protected by Supabase Row Level Security (RLS).
 *
 * Usage:
 *   const supabase = createClient()
 *   const { data } = await supabase.from('...').select('...')
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
