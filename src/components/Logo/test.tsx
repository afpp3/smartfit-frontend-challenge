import { render, screen } from '@testing-library/react'
import Logo from '.'

describe('<Logo />', () => {
  it('should render the Logo', () => {
    const { container } = render(<Logo />)

    expect(screen.getByLabelText(/Smart Fit/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/smart fit/i).parentElement).toHaveStyle({
      width: '14rem',
      height: '5.4rem'
    })
    expect(container.firstChild).toMatchSnapshot()
  })
})
