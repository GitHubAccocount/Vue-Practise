import { render, screen } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';

import JobListing from '@/components/JobResults/JobListing.vue';

describe('job listing component', () => {
  const renderJobLisiting = (jobProps = {}) => {
    render(JobListing, {
      props: {
        job: {
          title: 'JS Developer',
          organization: 'Company',
          location: ['Bangkok'],
          minimumQualifications: ['Code'],
          ...jobProps
        }
      },
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      }
    });
  };
  it('renders job title', () => {
    renderJobLisiting({ title: 'Vue Developer' });

    const jobTitle = screen.getByText('Vue Developer');
    expect(jobTitle).toBeInTheDocument();
  });

  it('renders job organization', () => {
    renderJobLisiting({ organization: 'Vue Company' });

    const jobOrganization = screen.getByText('Vue Company');
    expect(jobOrganization).toBeInTheDocument();
  });

  it('renders job location', () => {
    renderJobLisiting({ locations: ['Cracow', 'Phuket'] });

    const jobLocation = screen.getByText('Cracow', 'Phuket');
    expect(jobLocation).toBeInTheDocument();
  });

  it('renders job qualifications', () => {
    renderJobLisiting({
      minimumQualifications: [
        'Mesh granular deliverables, engineer enterprise convergence, and synergize B2C initiatives',
        'Morph bricks-and-clicks relationships, whiteboard one-to-one experiences, and innovate distributed schemas'
      ]
    });

    const jobQualifications = screen.getByText(
      'Mesh granular deliverables, engineer enterprise convergence, and synergize B2C initiatives',
      'Morph bricks-and-clicks relationships, whiteboard one-to-one experiences, and innovate distributed schemas'
    );
    expect(jobQualifications).toBeInTheDocument();
  });
});
