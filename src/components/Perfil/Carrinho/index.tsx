import { RootReducer } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { close } from '../../../store/reducer/cart'

import { CartContainer, Overlay, SideBar } from './styles'
import ItensCarrinho from '../ItensCarrinho'
import Formulario from '../Formulario'
import Fechar from '../../../assets/images/fechar.png'
import { ImageFechar } from '../CardPerfil/styles'

const AsideStates = {
  CARRINHO: 'CARRINHO',
  FORMULARIO: 'FORMULARIO'
}

const SideComponent = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const pratosSimplificados = items.map((item) => ({
    id: item.id,
    preco: item.preco
  }))

  const dispatch = useDispatch()

  const CloseCart = () => {
    dispatch(close())
  }

  const [estadoAtual, setEstadoAtual] = useState(AsideStates.CARRINHO)
  const [mostrarImagemFechar, setMostrarImagemFechar] = useState(true)

  switch (estadoAtual) {
    case AsideStates.CARRINHO:
      return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={CloseCart} />
          <SideBar>
            <ImageFechar
              src={Fechar}
              alt="icone de fechar"
              onClick={CloseCart}
            />
            <ItensCarrinho
              avancaParaEntrega={() => setEstadoAtual(AsideStates.FORMULARIO)}
            />
          </SideBar>
        </CartContainer>
      )
    case AsideStates.FORMULARIO:
      return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={CloseCart} />
          <SideBar>
            {mostrarImagemFechar && (
              <ImageFechar
                src={Fechar}
                alt="Ícone de fechar"
                onClick={CloseCart}
              />
            )}
            <Formulario
              avancaParaCarrinho={() => setEstadoAtual(AsideStates.CARRINHO)}
              setMostrarImagemFechar={setMostrarImagemFechar}
              pratos={pratosSimplificados}
            />
          </SideBar>
        </CartContainer>
      )

    // Inclua os casos para CONFIRMACAO e FINALIZADO
    default:
      return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={CloseCart} />
          <SideBar>Estado não reconhecido.</SideBar>
        </CartContainer>
      )
  }
}

export default SideComponent
