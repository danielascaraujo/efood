import { useSelector } from 'react-redux'
import { RootReducer } from '../store'

export const useValorTotal = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const total = items.reduce((acumulador, valorAtual) => {
    const precoNumerico = parseFloat(valorAtual.preco)
    return acumulador + precoNumerico
  }, 0)

  return total.toFixed(2).replace('.', ',')
}
