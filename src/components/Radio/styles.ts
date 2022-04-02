import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xsmall} 0;

    color: ${theme.colors.darkGrey};
    font-weight: ${theme.font.light};
    border-bottom: 2px solid ${theme.colors.gray100};
  `}
`

export const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.yellow};
    border-radius: 50%;
    background: transparent;
    transition: background ease-in-out;
    outline: none;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.yellow};
    }

    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: ${theme.colors.yellow};
      transition: opacity ease-in-out;
      opacity: 0;
      position: absolute;
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
    cursor: pointer;
    line-height: 1;
  `}
`

export const Schedule = styled.p``
