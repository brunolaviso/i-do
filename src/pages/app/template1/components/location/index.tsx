import clube from '@/assets/img/clube.png'
import divider from '@/assets/img/divider.svg'
import igreja from '@/assets/img/igreja.png'

export function Location() {
  return (
    <>
      <div className="mb-32 mt-32 flex flex-col items-center justify-center">
        <img className="mb-12 w-[24rem] rotate-180" src={divider} alt="" />
        <h1 className="font-vbs mb-8 text-7xl">Local da Cerimônia</h1>
        <img className="mb-8 w-[24rem]" src={divider} alt="" />
        <div className="mt-16 flex w-[1500px] items-center justify-around">
          <img className="h-[400px] rounded-[1rem]" src={igreja} alt="" />
          <iframe
            className="rounded-[1rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460.7284093092426!2d-48.55815793972814!3d-22.51066281455622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c745f607e86e49%3A0xe0fa04baf49cf46a!2sMatriz%20de%20S%C3%A3o%20Joaquim!5e0!3m2!1spt-BR!2sbr!4v1722821210233!5m2!1spt-BR!2sbr"
            width="600"
            height="400"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="mb-32 mt-32 flex flex-col items-center justify-center">
        <img className="mb-12 w-[24rem] rotate-180" src={divider} alt="" />
        <h1 className="font-vbs mb-8 text-7xl">Local da Festa</h1>
        <img className="mb-8 w-[24rem]" src={divider} alt="" />
        <div className="mt-16 flex w-[1500px] items-center justify-around">
          <img className="h-[400px] rounded-[1rem]" src={clube} alt="" />
          <iframe
            className="rounded-[1rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14740.916476282959!2d-48.54824971284182!3d-22.533088399999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c747652674cc33%3A0xc997169ddbf2e8ba!2sBosque%20Clube%20%26%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1722822445277!5m2!1spt-BR!2sbr"
            width="600"
            height="400"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  )
}
