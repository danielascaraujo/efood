import { ButtonPerfil } from './styled'

export type Props = {
  children: string
  onClick?: () => void
}

const Botao = ({ children, onClick }: Props) => (
  <>
    <ButtonPerfil onClick={onClick} type="button">
      {children}
    </ButtonPerfil>
  </>
)

export default Botao
