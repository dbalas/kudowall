<template lang="pug">
.card-options-step(v-bar)
  .py-0.py-sm-4.container-fluid
    .row.justify-content-center
      .col-12.col-xl-10
        kudo-list(
          :kudos="kudos",
          :defaultKudo="kudo",
          :isSelection="true",
          @select="select")
</template>

<script>
import KudoList from '@/components/KudoList.vue';
import kudos from '@/kudoTemplates';

export default {
  name: 'CardOptionsStep',
  props: ['kudo'],
  data() {
    return {
      kudos,
    };
  },
  methods: {
    select(kudo) {
      this.$emit('select', kudo);
    },
  },
  components: {
    KudoList,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/bootstrap';

.card-options-step {
  height: 100%;
}

.row {
  margin-right: 20px;
}

</style>

