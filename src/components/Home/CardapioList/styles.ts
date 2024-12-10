import styled from 'styled-components'

export const breakpoints = {
  tablet: '768px'
}

export const SectionList = styled.section`
  width: 1024px;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 15%;
    margin-bottom: 15%;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    width: 85%;
    margin: auto;
  }
`
