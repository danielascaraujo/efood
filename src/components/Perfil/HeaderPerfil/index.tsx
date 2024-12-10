import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'

import { HeaderContainer, PerfilList, ContainerPerfil, ImaLogo } from './styles'
import BannerPerfil from '../BannerPerfil'

import Logo from '../../../assets/images/logo.png'

import { open } from '../../../store/reducer/cart'
import { Restaurante } from '../../../types/Restaurante'

type Props = {
  restaurante: Restaurante
}

const HeaderPerfil = ({ restaurante }: Props) => {
  const dispatch = useDispatch()

  const OpenCart = () => {
    dispatch(open())
  }

  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <HeaderContainer>
      <ContainerPerfil>
        <PerfilList>
          <li>Restaurante</li>
          <li>
            <Link to="/">
              <ImaLogo src={Logo} alt="" />
            </Link>
          </li>
          <li onClick={OpenCart}>{items.length} produto(s) no carrinho</li>
        </PerfilList>
      </ContainerPerfil>
      <BannerPerfil
        key={restaurante.id}
        capa={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
    </HeaderContainer>
  )
}
export default HeaderPerfil
