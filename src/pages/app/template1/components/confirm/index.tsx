import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function Confirm() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-[50rem] flex-col items-center justify-center">
          <h1 className="font-vbs mb-12 mt-24 text-5xl">Confirmar Prenseça</h1>

          <div className="flex w-full items-center justify-center">
            <Input className="mr-12 w-64" placeholder="Nome(s)" />
            <Input className="w-64" placeholder="Telefone" />
          </div>

          <div className="mt-4 flex w-full flex-col items-center justify-center">
            <h3 className="font-ppns">Padrinho ?</h3>
            <input type="checkbox" id="yes" />
            <label htmlFor="yes">Sim</label>
            <input type="checkbox" id="no" />
            <label htmlFor="no">Não</label>
            <div className="items-top flex space-x-2">
              <Checkbox id="terms1" />
              <Label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </Label>
            </div>
          </div>

          <Button className="mt-4 w-80 rounded-3xl" variant={'outline'}>
            Enviar
          </Button>
        </div>
      </div>
    </>
  )
}
