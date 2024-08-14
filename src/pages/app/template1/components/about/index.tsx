import divider from '@/assets/img/divider.svg'
import noiva from '@/assets/img/noiva.png'
import noivo from '@/assets/img/noivo.png'

export function About() {
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
            <img src={noiva} alt="" />
            <div className="about-text">
              <p>
                Yasmin é uma designer gráfica talentosa que descobriu sua paixão
                pela arte desde criança. Cresceu em uma família amorosa, onde
                aprendeu a valorizar a criatividade e a expressão pessoal.Sua
                jornada a levou a explorar diferentes formas de arte, desde
                pintura até fotografia,antes de finalmente encontrar sua vocação
                no design. Ela é uma alma livre, sempre em busca de inspiração e
                beleza no mundo ao seu redor.
              </p>
            </div>
          </div>
          <div className="about-couple">
            <div className="about-text">
              <p>
                Yasmin é uma designer gráfica talentosa que descobriu sua paixão
                pela arte desde criança. Cresceu em uma família amorosa, onde
                aprendeu a valorizar a criatividade e a expressão pessoal.Sua
                jornada a levou a explorar diferentes formas de arte, desde
                pintura até fotografia,antes de finalmente encontrar sua vocação
                no design. Ela é uma alma livre, sempre em busca de inspiração e
                beleza no mundo ao seu redor.
              </p>
            </div>
            <img src={noivo} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
