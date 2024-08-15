import { supabase } from '@/lib/supabase'

export const couples = {
  async getAll() {
    const { data: couples, error } = await supabase.from('couples').select('*')

    if (error) {
      throw error
    }

    return couples
  },
  async getOne(slug: string) {
    const { data: couple, error } = await supabase
      .from('couples')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) {
      throw error
    }

    return couple
  },
}
