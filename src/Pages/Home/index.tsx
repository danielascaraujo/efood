import CardapioList from '../../components/Home/CardapioList'
import Footer from '../../components/Home/Footer'
import Hero from '../../components/Home/Hero'

import { useGetFeatureRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: home } = useGetFeatureRestaurantesQuery()

  if (home) {
    return (
      <>
        <Hero />
        <CardapioList restaurante={home} />
        <Footer />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Home
