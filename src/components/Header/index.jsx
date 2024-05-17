import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/devgentil.png"
          alt="DevGentil"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>DevGentil</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}