<template>
  <div class="border-brand-grey-2 border-b border-solid py-5">
    <div
      class="flex-warp flex cursor-pointer items-center justify-between"
      role="button"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ accordionTitle }}</h3>
      <font-awesome-icon :icon="caretIcon"></font-awesome-icon>
    </div>
    <div v-if="isOpen" class="mt-5 w-full">
      <slot>Oops! Somebody forgot to populate me.</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleAccordion',
  data() {
    return {
      isOpen: false
    };
  },
  props: {
    accordionTitle: {
      type: String,
      required: true
    }
  },
  computed: {
    caretIcon() {
      return this.isOpen ? ['fas', 'angle-up'] : ['fas', 'angle-down'];
    }
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
