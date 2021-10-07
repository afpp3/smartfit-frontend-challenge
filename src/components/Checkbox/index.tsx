import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  label: string
  labelFor: string
  value?: string | ReadonlyArray<string> | number | undefined
  results?: number
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  isChecked = false,
  label,
  labelFor,
  value,
  results,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const handleChange = () => {
    const status = !checked
    setChecked(status)
    !!onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Field>
        <S.Input
          type="checkbox"
          id={labelFor}
          value={value}
          checked={checked}
          onChange={handleChange}
          {...props}
        />
        <S.Label htmlFor={labelFor}>{label}</S.Label>
      </S.Field>
      <S.TotalResults>Resultados encontrados: {results}</S.TotalResults>
    </S.Wrapper>
  )
}

export default Checkbox
