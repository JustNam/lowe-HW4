import { supabase } from '@/lib/supabase'

export async function getPlans() {
  // [Nam] mình đang destructure bỏ qua "error" của Supabase nè, nên nếu query fail
  // (mất mạng, sai bảng, RLS chặn,...) thì nó cứ im lặng trả về [] chứ không báo gì hết,
  // UI nhìn vào tưởng đâu là plans valid nhưng rỗng, chứ không biết là đang bị lỗi
  const { data } = await supabase.from('plans').select()
  return data ?? []
}

export type Plan = { id: string; title: string; questions: unknown[] }
