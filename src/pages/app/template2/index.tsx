import { Couple } from '@/@types/couple'
import { useRef } from 'react'

interface Template2Props {
  couple: Couple
}

export function Template2({ couple }: Template2Props) {
  const ref = useRef(null)


  function handleScroll() {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smoothf' })
    }
      }

  return (
    <div>
      <h1>Template 2</h1>
      <h2>{couple.slug}</h2>
      <iframe
        src={couple.locationMap}
        width="600"
        height="450"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
        <section ref={ref}>
          <h2>Lista de Presentes</h2>
          <ul>
            {couple.presents.map((present) => (
              <li key={present.id}>
                <h3>{present.name}</h3>
                <p>{present.description}</p>
                <p>{present.price}</p>
              </li>
            ))}
          </ul>
        </section>
    </div>
  )
}
