import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

/**
 * Creates a Supabase client for use in Server Components, Server Actions,
 * and API Route Handlers.
 *
 * Uses the public NEXT_PUBLIC_ environment variables + reads/writes cookies
 * via Next.js `next/headers` so that auth sessions are preserved across
 * server-side renders.
 *
 * IMPORTANT: This function must only be called in a server context.
 * Do NOT import this in Client Components — use @/lib/supabase/client instead.
 *
 * NOTE: SUPABASE_SERVICE_ROLE_KEY is intentionally NOT used here.
 * Service-role access (bypassing RLS) will only be used when explicitly
 * required and approved, in a separate server-only utility.
 *
 * Usage:
 *   const supabase = await createClient()
 *   const { data } = await supabase.from('...').select('...')
 */
export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // setAll called from a Server Component — cookies cannot be set
            // during render. The middleware handles cookie refresh instead.
          }
        },
      },
    }
  )
}
