import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${theme.colors.darkGrey};
    font-weight: ${theme.font.light};
  `}
`

export const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.6rem;
    height: 1.6rem;
    border: 0.2rem solid ${theme.colors.darkGrey};
    border-radius: 0.2rem;
    transition: background border 0.1s ease-in-out;
    position: relative;
    outline: none;

    &:before {
      content: '';
      width: 0.4rem;
      height: 0.7rem;
      border: 0.2rem solid ${theme.colors.black};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: 0.1s ease-in-out;
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.yellow};
    }

    &:checked {
      border-color: ${theme.colors.yellow};
      background: ${theme.colors.yellow};
      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
    line-height: 1;
  `}
`

export const TotalResults = styled.p``
