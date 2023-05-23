import { render, screen } from '@testing-library/vue'

import ActionButton from '@/components/Shared/ActionButton.vue'
import { expect } from 'vitest'

describe('ActionButton', () => {
  it('renders text on the button', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    })
    const button = screen.getByRole('button', {
      name: /click me/i
    })
    expect(button).toBeInTheDocument()
  })

  it('assign class to the button', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary'
      }
    })
    const button = screen.getByRole('button', {
      name: /click me/i
    })
    expect(button).toHaveClass('primary')
  })
})
