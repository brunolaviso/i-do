import { ShoppingBag } from 'lucide-react'
import { useEffect, useState } from 'react'

import { api } from '@/lib/axios'

interface Gift {
  id: number
  name: string
  price: number
  image: string
}

export function Card() {
  const [gifts, setGifts] = useState<Gift[]>([])

  useEffect(() => {
    api
      .get('gifts')
      .then((response) => {
        setGifts(response.data)
      })
      .catch((error) => {
        console.error('Erro ao buscar presentes:', error)
      })
  }, [])

  return (
    <>
      {gifts.map((gift) => (
        <GiftCard key={gift.id} gift={gift} />
      ))}
    </>
  )
}

function GiftCard({ gift }: { gift: Gift }) {
  const formatPriceToBRL = (price: number) => {
    return (
      'R$ ' +
      price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    )
  }

  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={gift.image} alt={gift.name} />
        </div>
        <div className="card-text">
          <h1>{gift.name}</h1>
          <h3>Preço: {formatPriceToBRL(gift.price)}</h3>
        </div>
        <div className="card-button">
          <button className="button">
            <ShoppingBag className="button-img" /> <span>Comprar</span>
          </button>
        </div>
      </div>
    </>
  )
}
