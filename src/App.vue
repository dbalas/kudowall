<template lang="pug">
  #app
    navbar
    keep-alive
      transition(name="fade", mode="out-in")
        router-view
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'app',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
