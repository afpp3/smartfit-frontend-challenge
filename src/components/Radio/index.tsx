import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void
  label: string
  labelFor: string
  value?: RadioValue
  schedule?: string
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  label,
  labelFor,
  onCheck,
  value,
  schedule,
  ...props
}: RadioProps) => {
  const handleChange = () => {
    !!onCheck && onCheck(value)
    console.log(value)
  }

  return (
    <S.Wrapper>
      <S.Field>
        <S.Input
          type="radio"
          id={labelFor}
          value={value}
          onChange={handleChange}
          {...props}
        />
        <S.Label htmlFor={labelFor}>{label}</S.Label>
      </S.Field>
      <S.Schedule>{schedule}</S.Schedule>
    </S.Wrapper>
  )
}

export default Radio
