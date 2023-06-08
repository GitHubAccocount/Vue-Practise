import { render, screen } from '@testing-library/vue';
import axios from 'axios';
import { RouterLinkStub } from '@vue/test-utils';

import JobListings from '@/components/JobResults/JobListings.vue';

vi.mock('axios');

describe('JobListings', () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: '5',
      ...queryParams
    }
  });

  const renderJobListings = ($route) => {
    render(JobListings, {
      global: {
        mocks: {
          $route
        },
        stubs: {
          'router-link': RouterLinkStub
        }
      }
    });
  };

  it('fetches data from server', () => {
    axios.get.mockResolvedValue({ data: [] });

    const $route = createRoute();
    renderJobListings($route);

    expect(axios.get).toHaveBeenCalledWith('http://myfakeapi.com/jobs');
  });

  it('displays maximum of 10 jobs', async () => {
    axios.get.mockResolvedValue({ data: Array(10).fill({}) });

    const queryParams = { page: '1' };
    const $route = createRoute(queryParams);
    renderJobListings($route);

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(10);
  });

  describe('when params exclude page number', () => {
    it('displays page number 1', () => {
      const queryParams = { page: undefined };
      const $route = createRoute(queryParams);
      renderJobListings($route);

      const pageNum1 = screen.getByText('Page 1');
      expect(pageNum1).toBeInTheDocument();
    });
  });

  describe('when params include page number', () => {
    it('displays page number', () => {
      const queryParams = { page: 5 };
      const $route = createRoute(queryParams);
      renderJobListings($route);

      const pageNum5 = screen.getByText('Page 5');
      expect(pageNum5).toBeInTheDocument();
    });
  });

  describe('when user is on the first page', () => {
    it('displays "next" but doesnt "previous"', async () => {
      axios.get.mockResolvedValue({ data: Array(25).fill({}) });
      const queryParams = { page: 1 };
      const $route = createRoute(queryParams);
      renderJobListings($route);

      await screen.findAllByRole('listitem');

      const previousPage = screen.queryByRole('link', { name: /previous/i });
      const nextPage = screen.queryByRole('link', { name: /next/i });
      expect(previousPage).not.toBeInTheDocument();
      expect(nextPage).toBeInTheDocument();
    });
  });

  describe('when user is on the last page', () => {
    it('displays "previous" but doesnt "next"', async () => {
      axios.get.mockResolvedValue({ data: Array(25).fill({}) });
      const queryParams = { page: 3 };
      const $route = createRoute(queryParams);
      renderJobListings($route);

      await screen.findAllByRole('listitem');

      const previousPage = screen.queryByRole('link', { name: /previous/i });
      const nextPage = screen.queryByRole('link', { name: /next/i });
      expect(previousPage).toBeInTheDocument();
      expect(nextPage).not.toBeInTheDocument();
    });
  });
});
