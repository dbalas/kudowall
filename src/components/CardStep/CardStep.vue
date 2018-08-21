<template lang="pug">
.card-step.h-100
  .row.align-items-center.justify-content-center.h-100
    .col-4
      kudo.card(v-if="context.kudo", :kudo="context.kudo")
</template>

<script>
import Kudo from '@/components/Kudo/Kudo.vue';

export default {
  name: 'CardStep',
  props: ['context'],
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  components: {
    Kudo,
  },
};
</script>

<style lang="scss">
@import '../../assets/bootstrap';

</style>

