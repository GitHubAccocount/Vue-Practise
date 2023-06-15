import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import CollapsibleAccordion from '@/components/shared/CollapsibbleAccordion.vue';

describe('accordion', () => {
  const renderCollapsibleAccordion = (config = {}) => {
    render(CollapsibleAccordion, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      },
      props: {
        accordionTitle: 'My title'
      },
      ...config
    });
  };

  it('displays child content', async () => {
    const props = {
      accordionTitle: 'My title'
    };
    const slots = {
      default: '<h3>Sample child text</h3>'
    };
    const config = { props, slots };
    renderCollapsibleAccordion(config);

    const childText = screen.queryByText('Sample child text');
    expect(childText).not.toBeInTheDocument();

    const button = screen.getByRole('button', { name: /my title/i });
    await userEvent.click(button);
    const childText2 = screen.queryByText('Sample child text');
    expect(childText2).toBeInTheDocument();
  });

  describe('when parent doesnt provide child content', () => {
    it('render default content', async () => {
      const props = {
        accordionTitle: 'My title'
      };
      const slots = {};
      const config = { props, slots };
      renderCollapsibleAccordion(config);

      expect(screen.queryByText('Oops! Somebody forgot to populate me.')).not.toBeInTheDocument();

      const button = screen.getByRole('button', { name: /my title/i });
      await userEvent.click(button);
      expect(screen.queryByText('Oops! Somebody forgot to populate me.')).toBeInTheDocument();
    });
  });
});
