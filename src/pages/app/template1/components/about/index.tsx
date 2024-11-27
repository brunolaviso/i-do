import { Couple } from '@/@types/couple'
import divider from '@/assets/img/divider.svg'

interface AboutProps {
  couple: Couple
}

export function About({ couple }: AboutProps) {
  return (
    <>
      <div className="about">
        <div className="about-title">
          <img className="w-96 rotate-180" src={divider} alt="" />
          <h1>Sobre os Noivos</h1>
          <img className="mb-12 w-96" src={divider} alt="" />
        </div>
        <div className="about-content">
          <div className="about-couple">
            <img src={couple.wife.image} alt="" />
            <div className="about-text">
              <p>{couple.wife.bio}</p>
            </div>
          </div>
          <div className="about-couple">
            <div className="about-text">
              <p>{couple.husband.bio}</p>
            </div>
            <img src={couple.husband.image} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
