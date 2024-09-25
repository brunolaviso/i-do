import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Couple } from '@/@types/couple'
import { couples } from '@/api/couples'
import { gifts } from '@/api/gifts'

import { Template1 } from '../template1'
import { Template2 } from '../template2'

export function TemplatePage() {
  const { slug } = useParams<{ slug: string }>()
  const [couple, setCouple] = useState<Couple | null>(null)

  useEffect(() => {
    if (!slug) return
    couples.getOne(slug).then((data) => {
      gifts.getAllByCoupleId({ coupleId: data.id }).then((gifts) => {
        setCouple({ ...data, gifts })
      })
    })
  }, [slug])

  if (!couple) return <div>Carregando</div>

  if (couple.template_option === 1) return <Template1 couple={couple} />
  if (couple.template_option === 2) return <Template2 couple={couple} />
}
