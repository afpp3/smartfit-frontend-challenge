/* eslint-disable @next/next/no-img-element */
import * as S from './styles'
import Image from 'next/image'

import IconHour from '../../../public/images/icon-hour.png'
import Radio from 'components/Radio'
import Checkbox from 'components/Checkbox'

const Form = () => (
  <S.Wrapper>
    <header>
      <Image src={IconHour} height={32} width={32} />
      Horário
    </header>
    <form action="">
      <fieldset>
        <legend>Qual período quer treinar?</legend>
        <Radio
          label="Manhã"
          value="manha"
          schedule="06:00 às 12:00"
          labelFor="manha"
          name="periodo"
        />

        <Radio
          label="Tarde"
          value="tarde"
          schedule="12:01 às 18:00"
          labelFor="tarde"
          name="periodo"
        />

        <Radio
          label="Noite"
          value="noite"
          schedule="18:01 às 23:00"
          labelFor="noite"
          name="periodo"
        />
      </fieldset>

      <Checkbox label="Exibir unidades fechadas" labelFor="closedUnits" />
    </form>
  </S.Wrapper>
)

export default Form
