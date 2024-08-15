import { Couple } from '@/@types/couple'

import { About } from './components/about'
import { Carrossel } from './components/carrossel'
import { Confirm } from './components/confirm'
import { Footer } from './components/footer'
import { Gift } from './components/gift'
import { Location } from './components/location'
import { Message } from './components/message'

interface Template1Props {
  couple: Couple
}

export function Template1({ couple }: Template1Props) {
  console.log(couple)

  return (
    <>
      <Carrossel />
      <About />
      <Gift />
      <Message />
      <Confirm />
      <Location />
      <Footer />
    </>
  )
}
