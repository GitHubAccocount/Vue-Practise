import { queryByRole, render, screen } from '@testing-library/vue';
import { describe, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { RouterLinkStub } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

import MainNav from '@/components/Navigation/MainNav.vue';
import { useUserStore } from '@/stores/user';

describe('MainNav', () => {
  const renderMainNav = () => {
    const pinia = createTestingPinia();

    const $route = {
      name: 'Home'
    };
    render(MainNav, {
      global: {
        plugins: [pinia],
        mocks: {
          $route
        },
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    });
  };
  it('displays comany name', () => {
    renderMainNav();
    const companyName = screen.getByText('Company Careers');
    expect(companyName).toBeInTheDocument();
  });
  it('displays menu items for naviagtion', () => {
    renderMainNav();
    const naviagtionMenuItmes = screen.getAllByRole('listitem');
    const naviagtionMenuText = naviagtionMenuItmes.map((item) => item.textContent);
    expect(naviagtionMenuText).toEqual([
      'Teams',
      'Locations',
      'Life at Company Corp',
      'How we hire',
      'Students',
      'Jobs'
    ]);
  });

  it('displays profile img after clicking the button', async () => {
    renderMainNav();
    const userStore = useUserStore();

    let profileImg = screen.queryByRole('img', {
      name: /user profile image/i
    });
    expect(profileImg).not.toBeInTheDocument();

    const loginButton = screen.getByRole('button', {
      name: /sign in/i
    });
    userStore.isLoggedIn = true;
    await userEvent.click(loginButton);

    profileImg = screen.getByRole('img', {
      name: /user profile image/i
    });
    expect(profileImg).toBeInTheDocument();
  });
});
