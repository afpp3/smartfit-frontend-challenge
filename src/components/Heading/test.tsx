import { screen } from '@testing-library/react'
import { renderWithTheme } from 'helpers/test/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Heading title="Heading" />)

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the heading with description', () => {
    renderWithTheme(<Heading title="Heading" description="Description" />)

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/description/i)).toBeInTheDocument()
  })
})
