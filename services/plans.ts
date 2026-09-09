import { supabase } from '@/lib/supabase'

export async function getPlans() {
  const { data } = await supabase.from('plans').select()
  return data ?? []
}

export type Plan = { id: string; title: string; questions: unknown[] }
