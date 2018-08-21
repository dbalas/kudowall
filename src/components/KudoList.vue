<template lang="pug">
.kudo-list(:class="{ isSelection }")
  masonry(
    :cols="{default: 3, 1000: 2, 800: 2, 500: 1}",
    :gutter="{default: '20px'}"
  )
    transition(
      name="list",
      appear,
      v-for="kudo in kudos",
      :key="kudo.id"
    )
      kudo.card(
        @click.native="select(kudo)"
        :kudo="kudo"
      )
</template>

<script>
import Kudo from './Kudo/Kudo.vue';

export default {
  name: 'KudoList',
  props: ['kudos', 'isSelection'],
  methods: {
    select(kudo) {
      if (this.isSelection) this.$emit('select', kudo);
    },
  },
  components: {
    Kudo,
  },
};
</script>

<style lang="scss">
@import '../assets/bootstrap';

.isSelection {
  .card:hover {
    cursor: pointer;
    box-shadow: 0px 0px 20px 5px #d8d8d8;
  }
}

.card {
  margin-top: 20px !important;
  margin-bottom: 20px !important;
  border: none;
  border-radius: 2px;
  box-shadow: 1px 1px 5px #d8d8d8;
  background-color: #FFFFFF;
}

.list {
  backface-visibility: hidden;
  z-index: 1;
}

/* moving */
.list-move {
  transition: all 600ms ease-in-out 50ms;
}

/* appearing */
.list-enter-active {
  transition: all 400ms ease-out;
}

/* disappearing */
.list-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}

/* appear at / disappear to */
.list-enter,
.list-leave-to {
  opacity: 0;
}

</style>

