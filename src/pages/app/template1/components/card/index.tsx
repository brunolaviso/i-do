import { ShoppingBag } from 'lucide-react'

import { Gift } from '@/@types/couple'

interface CardProps {
  gift: Gift
}

export function Card({ gift }: CardProps) {
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
          <img src={gift.image} alt={gift.title} />
        </div>
        <div className="card-text">
          <h1>{gift.title}</h1>
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
