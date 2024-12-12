import { useParams } from 'react-router'
import Footer from '../../components/Home/Footer'
import HeaderPerfil from '../../components/Perfil/HeaderPerfil'
import OpcoesPerfil from '../../components/Perfil/PerfilList'
import { useGetFeaturePratosQuery } from '../../services/api'
import Carrinho from '../../components/Perfil/Carrinho'

const Perfil = () => {
  const { id } = useParams<{ id?: string }>()
  const {
    data: restaurante,
    isLoading,
    isError
  } = useGetFeaturePratosQuery(id ?? '')

  if (isLoading) {
    return <h3>Carregando...</h3>
  }

  if (isError || !restaurante) {
    return <h3>Erro ao carregar ou restaurante não encontrado.</h3>
  }

  return (
    <>
      <HeaderPerfil restaurante={restaurante} />
      <OpcoesPerfil pratos={restaurante.cardapio} />
      <Carrinho />
      <Footer />
    </>
  )
}

export default Perfil
