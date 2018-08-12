<template lang="pug">
  .kudo-card
    .card-header.d-flex.align-items-center(
      v-if="kudo.title",
      :style="{backgroundColor: kudo.headerBkgColor}"
    )
      h5.mr-auto.my-0.mx-0(:style="{color: kudo.headerColor}") {{ kudo.title }}
      kudo-icon(:name="kudo.icon", :color="kudo.headerIconColor")
    .card-body
      p.card-text(v-if="kudo.content") {{ kudo.content }}
      .image.text-center
        img.img-fluid.rounded(v-if="kudo.image", :src="kudo.image")
</template>

<script>
import KudoIcon from './KudoIcon.vue';

export default {
  name: 'Kudo',
  props: ['kudo'],
  computed: {
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
  padding: 0.8rem 1rem;
  min-height: 56px;
}

.image img {
  max-height: 500px;
}

</style>

