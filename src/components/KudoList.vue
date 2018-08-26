<template lang="pug">
.kudo-list(:class="{ isSelection }")
  masonry(
    :cols="{default: 3, 1200: 2, 800: 2, 600: 1}",
    :gutter="{default: '20px'}"
  )
    transition(
      name="list",
      appear,
      v-for="kudo in kudos",
      :key="kudo.id"
    )
      kudo.card(
        @click="select(kudo)"
        :kudo="getKudo(kudo)"
      )
</template>

<script>
import Kudo from './Kudo/Kudo.vue';

export default {
  name: 'KudoList',
  props: ['kudos', 'defaultKudo', 'isSelection'],
  methods: {
    select(kudo) {
      if (this.isSelection) this.$emit('select', kudo);
    },
    getKudo(kudo) {
      if (this.defaultKudo) {
        return {
          ...this.defaultKudo,
          ...kudo,
        };
      }
      return kudo;
    },
  },
  components: {
    Kudo,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/bootstrap';

.isSelection {
  .card:hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px 5px #d8d8d8;
  }
}

</style>

