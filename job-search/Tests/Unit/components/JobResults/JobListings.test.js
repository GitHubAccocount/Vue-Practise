import { render, screen } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';

import { createTestingPinia } from '@pinia/testing';
import { useJobsStore, FETCH_JOBS } from '@/stores/jobs';

import JobListings from '@/components/JobResults/JobListings.vue';
import { expect } from 'vitest';

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
        plugins: [createTestingPinia()],
        mocks: {
          $route
        },
        stubs: {
          'router-link': RouterLinkStub
        }
      }
    });
  };
  it('fetches jobs', () => {
    const $route = createRoute();
    renderJobListings($route);
    const store = useJobsStore();

    expect(store.FETCH_JOBS).toHaveBeenCalled();
  });

  it('displays maximum of 10 jobs', async () => {
    const queryParams = { page: '1' };
    const $route = createRoute(queryParams);
    renderJobListings($route);
    const store = useJobsStore();
    store.jobs = Array(10).fill({});

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
      const queryParams = { page: 1 };
      const $route = createRoute(queryParams);
      renderJobListings($route);
      const store = useJobsStore();
      store.jobs = Array(25).fill({});

      await screen.findAllByRole('listitem');

      const previousPage = screen.queryByRole('link', { name: /previous/i });
      const nextPage = screen.queryByRole('link', { name: /next/i });
      expect(previousPage).not.toBeInTheDocument();
      expect(nextPage).toBeInTheDocument();
    });
  });

  describe('when user is on the last page', () => {
    it('displays "previous" but doesnt "next"', async () => {
      const queryParams = { page: 3 };
      const $route = createRoute(queryParams);
      renderJobListings($route);
      const store = useJobsStore();
      store.jobs = Array(25).fill({});

      await screen.findAllByRole('listitem');

      const previousPage = screen.queryByRole('link', { name: /previous/i });
      const nextPage = screen.queryByRole('link', { name: /next/i });
      expect(previousPage).toBeInTheDocument();
      expect(nextPage).not.toBeInTheDocument();
    });
  });
});
