import * as S from './styles'

export type HeadingProps = {
  title: string
  description?: string
}

const Heading = ({ title, description }: HeadingProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Heading
