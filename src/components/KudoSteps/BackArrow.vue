<template lang="pug">
.back-arrow(@click="$emit('click')")
  arrow-back-icon(
    w="100px",
    h="100px"
  )
</template>

<script>
import ArrowBackIcon from 'vue-ionicons/dist/ios-arrow-back.vue';

export default {
  name: 'BackArrow',
  props: ['back'],
  components: {
    ArrowBackIcon,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/bootstrap';
.back-arrow {
  position: fixed;
  top: 50%;
  margin-top: -50px;
  cursor: pointer;
  z-index: 100;

  @media (max-width: 1200px) {
    display: none;
  }
}
</style>

