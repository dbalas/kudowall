<template lang="pug">
  .kudo-card
    .card-header.d-flex.align-items-center(
      v-if="kudo.title",
      :style="{backgroundColor: headerBackground, borderColor: headerBorderColor}"
    )
      h5.mr-auto.my-0.mx-0(:style="{color: headerColor}") {{ kudo.title }}
    .card-body
      p.card-text(v-if="kudo.content") {{ kudo.content }}
      .icon
        kudo-icon(:name="kudo.icon", :color="headerIconColor")
</template>

<script>
import { darken } from '@/lib/color';
import KudoIcon from './KudoIcon.vue';

export default {
  name: 'Kudo',
  props: ['kudo'],
  computed: {
    headerBorderColor() {
      return darken(this.kudo.headerBkgColor, 20);
    },
    headerColor() {
      return this.kudo && this.kudo.headerColor ? this.kudo.headerColor : '#000000';
    },
    headerBackground() {
      return this.kudo && this.kudo.headerBkgColor ? this.kudo.headerBkgColor : 'rgba(0, 0, 0, 0.03)';
    },
    headerIconColor() {
      return this.kudo && this.kudo.headerIconColor ? this.kudo.headerIconColor : '#000000';
    },
  },
  components: {
    KudoIcon,
  },
};
</script>

<style lang="scss">
@import '../../assets/bootstrap';

.card-header {
  border: 1px;
  padding: 0.7rem 1rem;
  min-height: 50px;
  border-bottom: 3px solid;
  text-transform: uppercase;
}

.card-body {
  position: relative;
  overflow: hidden;
  min-height: 180px;
  background: url(~@/assets/lined_paper.jpg);
  background-position-y: 13px;
  padding: 0 1rem;
}

.card-text {
  z-index: 100;
  position: relative;
  margin-top: 4px;
  line-height: 1.9;
}

.icon {
  position: absolute;
  bottom: 10px;
  right: 15px;
  z-index: 0;
}

</style>

