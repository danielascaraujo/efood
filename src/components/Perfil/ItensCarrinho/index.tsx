import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { useValorTotal } from '../../../Uteis'

import { remove } from '../../../store/reducer/cart'
import { Cards, ImgFechar, ImgPrato, Valor } from '../Carrinho/styles'
import Lixeira from '../../../assets/images/Lixeira.png'
import { ButtonPerfil } from '../ButtonPerfil/styled'
import { ContainerRec } from '../Formulario/styles'

interface ItensCarrinhoProps {
  avancaParaEntrega: () => void
}

const ItensCarrinho = ({ avancaParaEntrega }: ItensCarrinhoProps) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const Total = useValorTotal()

  return (
    <>
      {items.length === 0 ? (
        <ContainerRec>
          <h3>O carrinho não possui nenhum prato.</h3>
        </ContainerRec>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <Cards key={item.id}>
                <ImgPrato src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>
                    {parseFloat(item.preco).toFixed(2).replace('.', ',')}
                  </span>
                  <ImgFechar
                    onClick={() => removeItem(item.id)}
                    src={Lixeira}
                    alt="imagem de um X para fechar a aba"
                  />
                </div>
              </Cards>
            ))}
          </ul>
          <Valor>
            <li>Valor total</li>
            <li>R$ {Total}</li>
          </Valor>
          <ButtonPerfil onClick={avancaParaEntrega}>
            Continuar a entrega
          </ButtonPerfil>
        </>
      )}
    </>
  )
}

export default ItensCarrinho
