<template>
  <main class="flex w-full flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in jobs" :key="job.id" :job="job" />
    </ol>
  </main>
</template>

<script>
import axios from 'axios';
import JobListing from './JobListing.vue';

export default {
  name: 'JobListings',
  data() {
    return {
      jobs: []
    };
  },
  components: {
    JobListing
  },
  async mounted() {
    const response = await axios.get('http://localhost:3000/jobs');
    this.jobs = response.data;
  }
};
</script>
