import { render, screen } from '@testing-library/vue';

import HeaderContainer from '@/components/shared/HeaderContainer.vue';

describe('HeaderContainer', () => {
  it('displays title child content', () => {
    render(HeaderContainer, {
      slots: {
        title: '<h1>This is h1</h1>'
      }
    });
    expect(screen.queryByText('This is h1')).toBeInTheDocument();
  });

  it('displays subtitle child content', () => {
    render(HeaderContainer, {
      slots: {
        subtitle: '<h2>This is h2</h2>'
      }
    });
    expect(screen.queryByText('This is h2')).toBeInTheDocument();
  });
});
