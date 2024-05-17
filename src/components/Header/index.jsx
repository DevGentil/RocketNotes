import { Container, Profile } from './styles';

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/devgentil.png" alt="DevGentil" />
            </Profile>

            <div>
                <span>Bem-vindo</span>
                <strong>DevGentil</strong>
            </div>
        </Container>
    );
};