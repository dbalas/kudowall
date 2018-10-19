<template lang="pug">
kudo-base(:kudo="kudo", @click="$emit('click')")
  p.card-text(v-if="kudo.content") {{ kudo.content }}
</template>

<script>
import KudoBase from './KudoBase.vue';

export default {
  name: 'Kudo',
  props: ['kudo'],
  components: {
    KudoBase,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/bootstrap';

.card-text {
  z-index: 100;
  position: relative;
  margin-top: 4px;
  line-height: 1.9;
}
</style>

