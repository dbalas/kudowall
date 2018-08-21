<template lang="pug">
.kudo-steps.h-100
  swiper(ref='swiper')
    swiper-slide
      user-step(@select="selectUser", @next="next", :context="context")
    swiper-slide
      card-options-step(@select="selectOption", @next="next", :context="context")
    swiper-slide
      card-step(@next="next", :context="context")
</template>

<script>
import UserStep from '../UserStep/UserStep.vue';
import CardOptionsStep from '../CardOptionsStep/CardOptionsStep.vue';
import CardStep from '../CardStep/CardStep.vue';

export default {
  name: 'KudoSteps',
  data() {
    return {
      context: {
        user: null,
        kudo: null,
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.swiper.swiper;
    },
  },
  methods: {
    selectUser(user) {
      this.context.user = user;
    },
    selectOption(kudo) {
      this.context.kudo = kudo;
    },
    next() {
      this.swiper.slideNext();
    },
    back() {
      this.swiper.slidePrev();
    },
  },
  components: {
    UserStep,
    CardOptionsStep,
    CardStep,
  },
};
</script>

<style lang="scss">
@import '../../assets/bootstrap';

.swiper-container {
  height: 100%;
}
</style>

