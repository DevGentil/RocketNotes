import { Container, Links } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'

export function Details() {
  return (
    <Container>
      <Header />

      <section title = "Links úteis">
        <Links>
          <li><a href="#">https://rocketseat.com.br</a></li>
          <li><a href="#">https://rocketseat.com.br</a></li>
        </Links>
      </section>

      <Button title="Voltar" />
    </Container>
  )
}