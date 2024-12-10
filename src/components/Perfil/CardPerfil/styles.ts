import styled from 'styled-components'

import { cores } from '../../../styles'
import { ButtonPerfil } from '../ButtonPerfil/styled'
import { breakpoints } from '../../Home/CardapioList/styles'

export const CardContainer = styled.div`
  max-width: 320px;
  width: 100%;
  color: ${cores.trigo};
  background-color: ${cores.salmao};
  padding: 8px;

  img {
    width: 304px;
    height: 167px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto;
    margin-bottom: 8%;
    max-width: none;
    width: 90%;
  }
`

export const DescriptionPerfil = styled.div`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin-bottom: 8px;

  h3 {
    font-weight: 900;
    margin: 8px 0;
    font-size: 16px;
    line-height: 19px;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
    content: '';
  }
`

export const PerfilModal = styled.div`
  position: relative;
  display: flex;
  background-color: ${cores.salmao};
  z-index: 1;

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    width: 90%;
  }
`
export const PerfilDetails = styled.div`
  color: ${cores.branca};
  margin: 32px 32px 32px 24px;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 4% 3%;
  }

  ${DescriptionPerfil} {
    margin: 16px 0;
  }

  ${ButtonPerfil} {
    width: auto;
    padding: 4px 8px;
    margin: 0;
  }
`
export const ImageFechar = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`
export const ImagePerfil = styled.img`
  width: 280px;
  height: 280px;
  margin: 32px 0 32px 32px;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto;
    width: 100%;
    height: 150px;
    padding: 2%;
    height: 150px;
  }
`
export const BotaoPerfil = styled.button`
  color: ${cores.salmao};
  background-color: ${cores.trigo};
  border: none;
  width: auto%;
  padding: 4px 8px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`
