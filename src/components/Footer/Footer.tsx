import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/twitter.png'
import discordIcon from '../../assets/skype.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Mohammad</span>
        <span>Shahansha</span>
      </a>
      <div>
        <p>
        This website was made with <img src={reactIcon} alt="React" /> passion

          <span>😎</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/mohammad-shahansha-042226193/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/mdshahansha"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://twitter.com/mdshahansha822/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Twitter" />
        </a>

        <a
          href="https://join.skype.com/invite/u1JmDTF6lChF"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Skype" />
        </a>
      </div>
    </Container>
  )
}
