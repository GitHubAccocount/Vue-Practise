<template>
  <h1 class="text-6xl font-bold">Job Results page</h1>
  <buttom @click="goToHome">Go to Home Page</buttom>
</template>

<script>
export default {
  name: 'JobResultsView',
  methods: {
    goToHome() {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>
