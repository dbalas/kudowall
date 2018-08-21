<template lang="pug">
.card-options-step(v-bar)
  .py-4.container-fluid
    .row.justify-content-center
      .col-9
        h5.pb-2.text-center {{ $t('How?') }}
        kudo-list(:kudos="kudos", :isSelection="true", @select="select")
</template>

<script>
import KudoList from '@/components/KudoList.vue';
import kudos from '@/kudoTemplates';

export default {
  name: 'CardOptionsStep',
  data() {
    return {
      kudos,
    };
  },
  methods: {
    select(kudo) {
      this.$emit('select', kudo);
      this.$emit('next');
    },
  },
  components: {
    KudoList,
  },
};
</script>

<style lang="scss">
@import '../../assets/bootstrap';

.card-options-step {
  height: 100%;
}
</style>

