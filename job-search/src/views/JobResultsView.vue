<template>
  <div class="flex flex-nowrap">
    <job-filters-sidebar />
    <job-listings />
  </div>
</template>

<script>
import JobFiltersSidebar from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue';
import JobListings from '@/components/JobResults/JobListings.vue';

export default {
  name: 'JobResultsView',
  components: {
    JobFiltersSidebar,
    JobListings
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>
