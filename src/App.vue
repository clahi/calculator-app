<template>
    <div class="container flex">
      <div class="main my-auto">
        <the-header></the-header>
        <output-view></output-view>
      </div>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import OutputView from './components/calculator/OutputView.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    OutputView
  }
}
</script>

<style>

body {
  background-color: hsl(222, 26%, 31%);
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main {
  width: 90%;
}

@media (min-width: 768px) {
  .main {
    width: 50%;
  }
}

</style>
