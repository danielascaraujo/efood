import { Restaurante } from '../../../types/Restaurante'
import Cardapio from '../Cardapio'
import { List, SectionList } from './styles'

type Props = {
  restaurante: Restaurante[]
}

const CardapioList = ({ restaurante }: Props) => (
  <SectionList>
    <List>
      {restaurante.map((rest) => (
        <Cardapio
          key={rest.id}
          descricao={rest.descricao}
          tipo={rest.tipo}
          titulo={rest.titulo}
          avaliacao={rest.avaliacao}
          capa={rest.capa}
          id={rest.id}
          destacado={rest.destacado}
        />
      ))}
    </List>
  </SectionList>
)

export default CardapioList
