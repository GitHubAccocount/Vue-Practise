import { render, screen } from '@testing-library/vue';

import TheSubnav from '@/components/Navigation/TheSubnav.vue';
import { describe, expect } from 'vitest';

describe('TheSubnav', () => {
  const renderTheSubnav = (routeName) => {
    render(TheSubnav, {
      global: {
        mocks: {
          $route: {
            name: routeName
          }
        },
        stubs: {
          FontAwesomeIcon: true
        }
      }
    });
  };

  describe('when user in on job page', () => {
    it('displays job count', () => {
      renderTheSubnav('JobResults');
      const jobCount = screen.getByText('1653');
      expect(jobCount).toBeInTheDocument();
    });
  });

  describe('when user in not on job page', () => {
    it('DOESNT displays job count', () => {
      renderTheSubnav('Home');
      const jobCount = screen.queryByText('1653');
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
