<template lang="pug">
  #app(v-if="hydrated")
    navbar
    keep-alive
      transition(name="fade", mode="out-in")
        router-view
    vue-snotify
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'app',
  data: () => ({ hydrated: false }),
  async mounted() {
    await this.$apollo.provider.defaultClient.hydrated();
    this.hydrated = true;
  },
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
