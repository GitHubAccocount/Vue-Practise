<template>
  <collapsibble-accordion accordion-title="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-wrap">
          <li class="h-8 w-1/2">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <label for="VueTube">VueTube</label>
          </li>
          <li class="h-8 w-1/2">
            <input id="Between Vue" type="checkbox" class="mr-3" />
            <label for="Between Vue">Between Vue</label>
          </li>
          <li class="h-8 w-1/2">
            <input id="Et Vue Brute" type="checkbox" class="mr-3" />
            <label for="Et Vue Brute">Et Vue Brute</label>
          </li>
          <li class="h-8 w-1/2">
            <input id="Vue and a Half" type="checkbox" class="mr-3" />
            <label for="Vue and a Half">Vue and a Half</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsibble-accordion>
</template>

<script>
import CollapsibbleAccordion from '@/components/Shared/CollapsibbleAccordion.vue';

export default {
  name: 'JobFiltersSidebarOrganisations',
  components: {
    CollapsibbleAccordion
  }
};
</script>
