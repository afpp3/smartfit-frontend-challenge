import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export type WrapperProps = & Pick<
  ButtonProps,
  'bgColor'
>

const wrapperModifiers = {

  withIcon: (theme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,

}


export const Wrapper = styled.button<WrapperProps>`
   ${({ theme, bgColor }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    /* background: ${}; */
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    border: none;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    cursor: pointer;



  `}
`
