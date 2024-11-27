import { Gift as GiftType } from '@/@types/couple'

import { Card } from '../card'
import { SectionTitle } from '../section-title'

interface GiftProps {
  gifts: GiftType[]
}

export function Gift({ gifts }: GiftProps) {
  return (
    <div className="gift">
      <div className="gift-content">
        <div className="gift-title">
          <SectionTitle title="Presentes" />
        </div>
        <div className="gift-list">
          {gifts.map((gift) => (
            <Card key={gift.id} gift={gift} />
          ))}
        </div>
      </div>
    </div>
  )
}
