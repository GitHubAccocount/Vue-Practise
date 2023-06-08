<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            role="link"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Previous
          </router-link>

          <router-link
            v-if="nextPage"
            role="link"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Next
          </router-link>
        </div>
      </div>
    </div>
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
  computed: {
    currentPage() {
      return Number.parseInt(this.$route.query.page || '1');
    },
    displayedJobs() {
      const pageNumber = this.currentPage; // 2
      const startIndex = (pageNumber - 1) * 10; // 10
      const endIndex = pageNumber * 10; // 20
      return this.jobs.slice(startIndex, endIndex);
    },

    nextPage() {
      const nextPage = this.currentPage + 1;
      const upperLimit = Math.ceil(this.jobs.length / 10);
      return nextPage <= upperLimit ? nextPage : undefined;
    },
    previousPage() {
      const previousPagee = this.currentPage - 1;
      const bottomLimit = 1;
      return previousPagee >= bottomLimit ? previousPagee : undefined;
    }
  },
  async mounted() {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    const response = await axios.get(`${baseUrl}/jobs`);
    this.jobs = response.data;
  }
};
</script>
