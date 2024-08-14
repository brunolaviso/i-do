import divider from '@/assets/img/divider.svg'

interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <img className="w-60 rotate-180" src={divider} alt="" />
      <h1 className="font-serif text-5xl">{title}</h1>
      <img className="w-60" src={divider} alt="" />
    </div>
  )
}
