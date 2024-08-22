export interface Person {
  id: number
  name: string
  bio: string
  image: string
}

export interface Gift {
  id: string
  title: string
  price: string
  image: string
  url: string
}

export interface Couple {
  id: number
  created_at: string
  bio: string
  images: string[]
  gifts: Gift[]
  wife: Person
  husband: Person
  slug: string
  template_option: number
}
