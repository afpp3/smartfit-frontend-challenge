import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  bgColor: 'yellow' | 'transparent'
} & ButtonTypes

const Button = ({ children, bgColor = 'yellow', ...props }: ButtonProps) => (
  <S.Wrapper bgColor={bgColor} {...props}>
    {<span>{children}</span>}
  </S.Wrapper>
)

export default Button
