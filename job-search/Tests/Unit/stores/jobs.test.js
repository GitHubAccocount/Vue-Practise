import { setActivePinia, createPinia } from 'pinia';
import axios from 'axios';

import { useJobsStore } from '@/stores/jobs';

vi.mock('axios');

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('stores job listings', () => {
    const store = useJobsStore();
    expect(store.jobs).toEqual([]);
  });
});

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('maks API request and stores recived jobs', async () => {
    axios.get.mockResolvedValue({ data: ['Job 1', 'Job 2'] });
    const store = useJobsStore();
    await store.FETCH_JOBS();
    expect(store.jobs).toEqual(['Job 1', 'Job 2']);
  });
});
