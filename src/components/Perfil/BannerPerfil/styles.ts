import styled from 'styled-components'
import { cores } from '../../../styles'
import { breakpoints } from '../../Home/CardapioList/styles'

export const Banner = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${cores.branca};
  font-size: 32px;
  font-weight: 100;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
    content: '';
  }

  p {
    z-index: 1;
    margin-top: 24px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 156px;

    @media (max-width: ${breakpoints.tablet}) {
      text-align: center;
    }
  }
`
export const Paragrafo = styled.h2`
  z-index: 1;
  font-size: 32px;
  font-weight: 900;
  padding-bottom: 32px;
`
