import styled from 'styled-components'
import { cores } from '../../../styles'
import { breakpoints } from '../CardapioList/styles'

import { Restaurante } from '../../../types/Restaurante'

export const ImgCardapio = styled.div<Pick<Restaurante, 'capa'>>`
  width: 100%;
  max-width: 472px;
  height: 217px;
  background-image: url(${(props) => props.capa});
  flex-direction: row-reverse;
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: none;
  }
`

export const Etiqueta = styled.span`
  position: relative;
  top: 16px;
  right: 8px;
`

export const CardCadapio = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 10%;
  }
`

export const CadapiorListaTag = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;

  h3 {
    margin-top: 8px;
    margin-left: 8px;
    line-height: 22px;
  }

  li:nth-child(2) {
    padding: 8px 8px 0 8px;
  }
`

export const Borda = styled.div`
  border-style: solid;
  border-width: 1px; /* Ajuste a largura conforme necessário */
  border-color: transparent ${cores.salmao} ${cores.salmao} ${cores.salmao};
  background-color: ${cores.branca};
  color: ${cores.salmao};

  a {
    color: ${cores.trigo};
    background-color: ${cores.salmao};
    border: none;
    padding: 4px 6px;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    display: inline-block;
    margin: 8px 8px;
  }
`

export const TextCardapio = styled.p`
  margin: 16px 8px;
  line-height: 22px;
  font-size: 14px;
`
export const Nota = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;

  p {
    padding-right: 8px;
  }
`
export const ImgEstrela = styled.img`
  padding-left: 8px;
`
