import { Container } from 'components/Container'
import Form from 'components/Form'
import Header from 'components/Header'
import Heading from 'components/Heading'

export default function Home() {
  return (
    <>
      <Header />
      <div style={{ maxWidth: '70vw', margin: '0 auto' }}>
        <Container>
          <Heading
            title="REABERTURA SMART FIT"
            description="O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade está
          aberta e as medidas de segurança que estamos seguindo."
          />
        </Container>

        <Container>
          <Form />
        </Container>
      </div>
    </>
  )
}
