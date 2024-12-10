import { HeroContainer, HeroText, ImgHero } from './styles'
import Logo from '../../../assets/images/logo.png'

const Hero = () => (
  <HeroContainer>
    <ImgHero src={Logo} />
    <HeroText>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </HeroText>
  </HeroContainer>
)

export default Hero
