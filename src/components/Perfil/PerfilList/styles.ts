import styled from 'styled-components'
import { breakpoints } from '../../Home/CardapioList/styles'

export const PerfilList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-top: 14%;
    margin-bottom: 12%;
  }
`
export const OpcoesContainer = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    margin: auto;
  }
`
