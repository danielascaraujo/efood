import styled from 'styled-components'
import { cores } from '../../../styles'

export const TagContainer = styled.div<{ destacado?: boolean }>`
  margin-right: 8px;
  background-color: ${cores.salmao};
  color: ${cores.trigo};
  font-weight: 700;
  font-size: 12px;
  padding: 6px 10px;
  display: inline-block;
  background-color: ${(props) => (props.destacado ? 1 : 0)};
`
