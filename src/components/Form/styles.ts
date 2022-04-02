import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    border: 3px solid ${theme.colors.gray100};
    border-radius: ${theme.border.radius};
  `}
`
