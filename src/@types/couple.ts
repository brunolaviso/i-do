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
  created_at: '2024-08-14T23:15:05.394236+00:00'
  bio: string
  images: string[]
  gifts: Gift[]
  wife: Person
  husband: Person
  slug: string
  template_option: number
}
