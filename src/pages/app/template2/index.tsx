import { Couple } from '@/@types/couple'

interface Template2Props {
  couple: Couple
}

export function Template2({ couple }: Template2Props) {
  return (
    <div>
      <h1>Template 2</h1>
      <h2>{couple.slug}</h2>
    </div>
  )
}
