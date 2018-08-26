<template lang="pug">
.new-kudo
  kudo-steps
</template>

<script>
import KudoSteps from '@/components/KudoSteps/KudoSteps.vue';

export default {
  name: 'NewKudo',
  components: {
    KudoSteps,
  },
};
</script>

<style lang="scss" scoped>
.new-kudo {
  height: calc(100% - 56.19px);
}
</style>
