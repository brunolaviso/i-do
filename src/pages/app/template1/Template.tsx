import { About } from './components/about'
import { Carrossel } from './components/carrossel'
import { Confirm } from './components/confirm'
import { Footer } from './components/footer'
import { Gift } from './components/gift'
import { Location } from './components/location'
import { Message } from './components/message'

export function Template1() {
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
