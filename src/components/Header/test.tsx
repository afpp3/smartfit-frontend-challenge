import { screen } from '@testing-library/react'
import { renderWithTheme } from 'helpers/test/helpers'

import Header from '.'

describe('<Header />', () => {
  it('should render the header with logo', () => {
    const { container } = renderWithTheme(<Header />)
    expect(screen.getByRole('img', { name: /smart fit/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
