<template lang="pug">
.kudo-card(@click="$emit('click')")
  .card-header.d-flex.align-items-center(:style="cardHeaderStyles")
    h5.mr-auto.my-0.mx-0(:style="titleStyles") {{ kudo.title }}
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
    cardHeaderStyles() {
      const headerBorderColor = this.kudo.headerBkgColor ? darken(this.kudo.headerBkgColor, 20) : 'rgba(0, 0, 0, 0.03)';
      const headerBackground = this.kudo.headerBkgColor ? this.kudo.headerBkgColor : 'rgba(0, 0, 0, 0.03)';
      return {
        backgroundColor: headerBackground,
        borderColor: headerBorderColor,
      };
    },
    titleStyles() {
      const headerColor = this.kudo && this.kudo.headerColor ? this.kudo.headerColor : '#000000';
      return {
        color: headerColor,
      };
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

