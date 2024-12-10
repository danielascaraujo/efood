import { TagContainer } from './styles'

export type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
}

const Tag = ({ children, style }: Props) => (
  <TagContainer style={style}>
    <span>{children}</span>
  </TagContainer>
)

export default Tag
