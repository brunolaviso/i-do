import { Couple } from '@/@types/couple'
import { supabase } from '@/lib/supabase'

export const couples = {
  async getAll() {
    const { data, error } = await supabase.from('couples').select('*')

    if (error) {
      throw error
    }

    return data
  },
  async getOne(slug: string) {
    const select = `
      id,
      created_at,
      bio,
      images,
      slug,
      template_option,
      wife:people!couples_wife_fkey(id, name),
      husband:people!couples_husband_fkey(id, name)
    `

    const { data, error } = await supabase
      .from('couples')
      .select<typeof select, Couple>(select)
      .eq('slug', slug)
      .single()

    if (error) {
      throw error
    }

    return data
  },
}
