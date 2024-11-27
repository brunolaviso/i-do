import { Couple } from '@/@types/couple'

interface TemplateProps {
  couple: Couple
}

export function Template2({ couple }: TemplateProps) {
  return (
    <>
      {/* <pre>{JSON.stringify(couple, null, 2)}</pre> */}
      <h1>
        {couple.wife.name} & {couple.husband.name}
      </h1>
      {/* <img src={couple.images[0]} alt="" /> */}
      {couple.images.map((img) => (
        <img key={img} src={img} alt="" />
      ))}

      <section id="gifts">
        <div>
          <img src="" alt="" />
          <h2>Lista de presentes</h2>
          <img src="" alt="" />
        </div>
        <p>{couple.gift_intro}</p>
        <div id="gifts-list">
          {couple.gifts.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <a href={item.url} target="_blank" rel="noreferrer">
                Comprar
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="ceremony">
        <h2>Cerimonia</h2>
        <p>{couple.ceremony_intro}</p>
        <img src={couple.ceremony_img} alt="" />
        <iframe
          src={couple.ceremony_loc}
          width="1000"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section id="party">
        <h2>Festa</h2>
        <p>{couple.event_intro}</p>
        <img src={couple.event_img} alt="" />
        <iframe
          src={couple.event_loc}
          width="1000"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  )
}
