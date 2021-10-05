import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.darkGrey};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.black};
    font-size: ${theme.font.sizes.huge};
    width: min-content;
    position: relative;
    margin-bottom: ${theme.spacings.xxlarge};

    &::after {
      content: '';
      position: absolute;
      bottom: -2.6rem;
      left: 0;
      width: 11.2rem;
      border-bottom: 1rem solid ${theme.colors.darkGrey};
    }

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.xxlarge}
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.book};
  `}
`
