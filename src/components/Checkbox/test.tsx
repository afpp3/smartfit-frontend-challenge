import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'helpers/test/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="label" labelFor="checkbox" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    expect(screen.getByLabelText(/label/i)).toBeInTheDocument()

    expect(screen.getByText(/label/i)).toHaveAttribute('for', 'checkbox')
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox label="label" labelFor="checkbox" onCheck={onCheck} />
    )
    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox label="label" labelFor="checkbox" onCheck={onCheck} isChecked />
    )

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be acessible with tab', () => {
    renderWithTheme(<Checkbox label="label" labelFor="checkbox" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/label/i)).toHaveFocus()
  })
})
