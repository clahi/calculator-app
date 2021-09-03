<template>
  <div class="">
    <div class="mb-3 mt-3">
      <input type="number" :placeholder="originalNumber" class="form-control text-end" />
    </div>
    <number-buttons @numberValue="valueOutput"></number-buttons>
  </div>
</template>

<script>
import NumberButtons from "./NumberButtons.vue";

import { computed, ref } from "vue";

import { useStore } from "vuex";

export default {
  components: {
    NumberButtons,
  },
  setup() {
    const store = useStore();

    const originalNumber = computed(() => {
      return store.getters.outputNumber;
    });

    function valueOutput(val) {
      store.dispatch('outputValue', val)
    }

    console.log("the original is " + originalNumber.value)

    const number = ref(0);

    return {
      number,
      originalNumber,
      valueOutput
    };
  },
};
</script>

<style scoped>
</style>