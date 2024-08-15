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
  bio: string
  images: string[]
  gifts: Gift[]
  wife: Person
  husband: Person
}
