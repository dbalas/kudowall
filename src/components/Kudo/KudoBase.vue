<template lang="pug">
  .kudo-card
    .card-header.d-flex.align-items-center(
      v-if="kudo.title",
      :style="{backgroundColor: headerBackground, borderColor: headerBorderColor}"
    )
      h5.mr-auto.my-0.mx-0(:style="{color: headerColor}") {{ kudo.title }}
      .user(v-show="kudo.userImage")
        img(:src="kudo.userImage", v-tooltip="kudo.userName")
    .card-body
      slot
      .icon
        kudo-icon(:name="kudo.icon", :color="headerIconColor")
</template>

<script>
import { darken } from '@/lib/color';
import KudoIcon from './KudoIcon.vue';

export default {
  name: 'KudoBase',
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

<style lang="scss" scoped>
@import '../../assets/bootstrap';

.card-header {
  border: 1px;
  padding: 0.4rem 1rem;
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

.icon {
  position: absolute;
  bottom: 10px;
  right: 15px;
  z-index: 0;
}

.user {
  img {
    border-radius: 50%;
    width: 40px;
    height: auto;
  }
}

</style>

