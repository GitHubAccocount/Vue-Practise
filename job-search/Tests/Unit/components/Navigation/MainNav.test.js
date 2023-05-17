import { queryByRole, render, screen } from '@testing-library/vue'
import MainNav from '@/components/Navigation/MainNav.vue'
import { describe, expect } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('MainNav', () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }
  it('displays comany name', () => {
    renderMainNav()
    const companyName = screen.getByText('Company Careers')
    expect(companyName).toBeInTheDocument()
  })
  it('displays menu items for naviagtion', () => {
    renderMainNav()
    const naviagtionMenuItmes = screen.getAllByRole('listitem')
    const naviagtionMenuText = naviagtionMenuItmes.map((item) => item.textContent)
    expect(naviagtionMenuText).toEqual([
      'Teams',
      'Locations',
      'Life at Company Corp',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })
  it('displays profile img after clicking the button', async () => {
    renderMainNav()
    let profileImg = screen.queryByRole('img', {
      name: /user profile image/i
    })
    expect(profileImg).not.toBeInTheDocument()

    const loginButton = screen.getByRole('button', {
      name: /sign in/i
    })
    await userEvent.click(loginButton)
    profileImg = screen.getByRole('img', {
      name: /user profile image/i
    })
    expect(profileImg).toBeInTheDocument()
  })
})
