import { supabase } from '@/lib/supabase'

export const gifts = {
  async getAllByCoupleId({ coupleId }: { coupleId: string }) {
    const { data, error } = await supabase
      .from('gifts')
      .select('*')
      .eq('couple_id', coupleId)

    if (error) {
      throw error
    }

    return data
  },
}
