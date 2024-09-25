export interface Person {
  id: number
  name: string
  bio: string
  image: string
}

export interface Gift {
  id: string
  created_at: string
  title: string
  price: number
  url: string
  image: string
}

export interface Couple {
  id: string
  created_at: string
  bio: string
  images: string[]
  gifts: Gift[]
  wife: Person
  husband: Person
  slug: string
  template_option: number
  gift_intro: string
  ceremony_intro: string
  ceremony_img: string
  ceremony_loc: string
  event_intro: string
  event_img: string
  event_loc: string
}
