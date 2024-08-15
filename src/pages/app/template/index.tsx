import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { couples } from '@/api/couples'

import { Template1 } from '../template1/Template'

export function TemplatePage() {
  const { slug } = useParams<{ slug: string }>()
  const [couple, setCouple] = useState<any>(null)

  useEffect(() => {
    if (!slug) return
    couples.getOne(slug).then((data) => setCouple(data))
  }, [slug])

  return <Template1 couple={couple} />
}
