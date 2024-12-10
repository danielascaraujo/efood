import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { open, add } from '../../../store/reducer/cart'

import {
  CardContainer,
  DescriptionPerfil,
  ImageFechar,
  ImagePerfil,
  Modal,
  PerfilDetails,
  PerfilModal,
  BotaoPerfil
} from './styles'

import { Prato } from '../../../types/Restaurante'

import Botao from '../ButtonPerfil'
import Fechar from '../../../assets/images/fechar.png'

type Props = {
  prato: Prato
}
const CardPerfil = ({ prato }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)
  const dispatch = useDispatch()

  const OpenCart = () => {
    dispatch(open())
  }

  const AddToCart = () => {
    dispatch(add(prato))
  }

  const limitarDescricao = (descricao: string) => {
    if (descricao.length > 160) {
      return descricao.substring(0, 160) + '...'
    }

    return descricao
  }

  return (
    <>
      <CardContainer>
        <div>
          <img src={prato.foto} alt="fotografia de um prato do cardápio" />
        </div>
        <DescriptionPerfil>
          <h3>{prato.nome}</h3>
          <p>{limitarDescricao(prato.descricao)}</p>
        </DescriptionPerfil>
        <div>
          <Botao onClick={() => setModalAberto(true)}>
            Adicionar ao carrinho
          </Botao>
        </div>
      </CardContainer>
      <Modal className={modalAberto ? 'visible' : ''}>
        <PerfilModal className="container">
          <div>
            <ImagePerfil src={prato.foto} alt="imagem da pizza" />
          </div>
          <PerfilDetails>
            <h3>{prato.nome}</h3>
            <DescriptionPerfil>
              {prato.descricao}
              <br />
              <br />
              {prato.porcao}
            </DescriptionPerfil>
            <BotaoPerfil
              onClick={() => {
                OpenCart()
                AddToCart()
                setModalAberto(false)
              }}
            >
              Adicionar ao carrinho - R${' '}
              {parseFloat(prato.preco).toFixed(2).replace('.', ',')}
            </BotaoPerfil>
          </PerfilDetails>
          <ImageFechar
            onClick={() => setModalAberto(false)}
            src={Fechar}
            alt="icone de fechar"
          />
        </PerfilModal>
        <div className="overlay" onClick={() => setModalAberto(false)}></div>
      </Modal>
    </>
  )
}

export default CardPerfil
