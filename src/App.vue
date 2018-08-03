<template lang="pug">
  #app
    navbar
    router-view
</template>

<script>
import Navbar from '@/components/views/Navbar.vue';

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
