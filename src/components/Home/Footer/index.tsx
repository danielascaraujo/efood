import Instagram from '../../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import Facebook from '../../../assets/images/facebook-round-svgrepo-com 1.png'
import Twitter from '../../../assets/images/twitter-2-svgrepo-com 1.png'
import Logo from '../../../assets/images/logo.png'
import { FooterContainer, FooterList, ImgLogo } from './styles'

const Footer = () => (
  <FooterContainer>
    <ImgLogo src={Logo} alt="logo marca do site." />
    <FooterList>
      <li>
        <img src={Instagram} alt="logo marca instagram" />
      </li>
      <li>
        <img src={Facebook} alt="logo marca facebook" />
      </li>
      <li>
        <img src={Twitter} alt="logo marca twitter" />
      </li>
    </FooterList>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade
      <br /> dos produtos é toda do estabelecimento contratado.
    </p>
  </FooterContainer>
)

export default Footer
