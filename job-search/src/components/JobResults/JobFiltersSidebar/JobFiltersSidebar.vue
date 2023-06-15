<template>
  <div class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-8">
    <section class="pb-5">
      <div class="flex justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary"></action-button>
        </div>
      </div>
      <collapsibble-accordion accordion-title="Job types">
        <div class="mt-5">
          <fieldset>
            <ul class="flex flex-wrap">
              <li class="h-8 w-1/2">
                <input id="VueTube" type="checkbox" class="mr-3" />
                <label for="VueTube">VueTube</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </collapsibble-accordion>
      <Job-filters-sidebar-organisations></Job-filters-sidebar-organisations>
    </section>
  </div>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue';
import CollapsibbleAccordion from '@/components/Shared/CollapsibbleAccordion.vue';
import JobFiltersSidebarOrganisations from './JobFiltersSidebarOrganisations.vue';

export default {
  name: 'JobFiltersSidebar',
  components: {
    ActionButton,
    CollapsibbleAccordion,
    JobFiltersSidebarOrganisations
  }
};
</script>
