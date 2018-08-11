<template lang="pug">
  .kudo-card
    .card-header.d-flex.align-items-center(
      v-if="title",
      :style="{backgroundColor: headerBackground}"
    )
      h5.mr-auto.my-0.mx-0(:style="{color: headerColor}") {{ title }}
      kudo-icon(:name="icon", :color="headerIconColor")
    .card-body
      p.card-text(v-if="content") {{ content }}
      .image.text-center
        img.img-fluid.rounded(v-if="image", :src="image")
</template>

<script>
import KudoIcon from './KudoIcon.vue';

export default {
  name: 'Kudo',
  props: ['title', 'content', 'icon', 'image', 'styles'],
  computed: {
    headerColor() {
      return this.styles && this.styles.headerColor ? this.styles.headerColor : '#000000';
    },
    headerBackground() {
      return this.styles && this.styles.headerBkgColor ? this.styles.headerBkgColor : 'rgba(0, 0, 0, 0.03)';
    },
    headerIconColor() {
      return this.styles && this.styles.headerIconColor ? this.styles.headerIconColor : '#000000';
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

