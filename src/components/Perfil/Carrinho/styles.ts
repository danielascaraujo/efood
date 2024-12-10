import styled from 'styled-components'
import { cores } from '../../../styles'
import { ButtonPerfil } from '../ButtonPerfil/styled'
import { ImageFechar } from '../CardPerfil/styles'
import { breakpoints } from '../../Home/CardapioList/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${cores.salmao};
  width: 360px;
  padding: 32px 8px 0 8px;
  z-index: 1;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  li {
    display: flex;
    position: relative;
  }
  input {
    color: #000;
  }

  ${ImageFechar} {
    display: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;

    ${ImageFechar} {
      display: block;
      left: 8px;
    }
  }
`

export const ImgPrato = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 8px;
`
export const ImgFechar = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`
export const Valor = styled.ul`
  display: flex;
  justify-content: space-between;
  color: ${cores.trigo};
  margin-top: 40px;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: space-around;
  }

  li {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
  }

  ${ButtonPerfil} {
    font-weight: 700;
  }
`
export const Cards = styled.li`
  background-color: ${cores.trigo};
  width: 344px;
  height: 100px;
  padding: 8px 8px 16px 8px;
  margin-bottom: 16px;
  color: ${cores.salmao};

  h3 {
    margin-bottom: 16px;
    height: 21px;
    font-weight: 900;
    font-size: 18px;
  }

  span {
    margin-bottom: 34px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 95%;
    margin: 0 auto;
    margin-bottom: 16px;
  }
`
