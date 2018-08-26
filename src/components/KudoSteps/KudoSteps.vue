<template lang="pug">
.kudo-steps.h-100
  swiper(ref='swiper', :options="swiperOption")
    swiper-slide
      user-step(@select="selectUser")
    swiper-slide
      back-arrow(@click="back")
      card-options-step(@select="selectOption", :kudo="kudo")
    swiper-slide
      back-arrow(@click="back")
      card-step(@confirm="confirm", :kudo="kudo")
</template>

<script>
import CreateKudo from '@/graphql/mutations/CreateKudo';
import BackArrow from './BackArrow.vue';
import UserStep from '../UserStep/UserStep.vue';
import CardOptionsStep from '../CardOptionsStep/CardOptionsStep.vue';
import CardStep from '../CardStep/CardStep.vue';

export default {
  name: 'KudoSteps',
  data() {
    return {
      swiperOption: {
        loop: false,
        allowTouchMove: false,
        speed: 500,
        spaceBetween: 0,
      },
      kudo: {
        content: null,
        userId: null,
        userName: null,
        userImage: null,
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
      this.kudo.userId = user.id;
      this.kudo.userName = user.real_name;
      this.kudo.userImage = user.profile.image_72;
      this.next();
    },
    selectOption(kudo) {
      this.kudo = {
        ...this.kudo,
        ...kudo,
      };
      this.next();
    },
    confirm(text) {
      this.kudo.content = text;
      this.$apollo.mutate({
        mutation: CreateKudo,
        variables: this.kudo,
      }).then(() => {
        this.swiper.destroy(false, false);
        this.$router.push({ name: 'Home' });
        this.$snotify.success(this.$t('Your kudos has been sent successfully.'), this.$t('Congratulations!'));
      }).catch((error) => {
        console.error(error);
        this.$snotify.error(this.$t('Please contact with admins.'), this.$t('Unexpected error'));
      });
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
    BackArrow,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/bootstrap';

.swiper-container {
  height: 100%;
}
</style>

