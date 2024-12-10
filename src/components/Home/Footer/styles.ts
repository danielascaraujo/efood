import styled from 'styled-components'
import { cores } from '../../../styles'
import { breakpoints } from '../CardapioList/styles'

export const ImgLogo = styled.img`
  margin-top: 40px;
  margin-bottom: 32px;
`

export const FooterContainer = styled.div`
  text-align: center;
  color: ${cores.salmao};
  background-color: ${cores.trigo};

  p {
    padding-bottom: 40px;
  }
`

export const FooterList = styled.ul`
  justify-content: center;
  display: flex;
  margin-bottom: 80px;

  li:nth-child(2) {
    margin: 0 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 10%;
  }
`
