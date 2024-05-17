import { Container } from './styles'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
export function Details() {
  return (
    <Container>
      <Header />
      <h1>Hello World!</h1>
      <span>Rodrigo Gonçalves</span>

      <Button title="Login" loading />
      <Button title="Cadastrar" />
      <Button title="Voltar" />
    </Container>
  )
}