import axios from 'axios';

import getJobs from '@/api/getJobs';

vi.mock('axios');

describe('getJobs', () => {
  it('fetches the api jobs', async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith('http://myfakeapi.com/jobs');
  });
});