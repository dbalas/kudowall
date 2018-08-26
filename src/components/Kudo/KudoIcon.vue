<template lang="pug">
component(:is="name", w="140px", h="140px", :style="{color}")
</template>

<script>
import IosMedal from 'vue-ionicons/dist/ios-medal.vue';
import IosBulb from 'vue-ionicons/dist/ios-bulb.vue';
import IosBeer from 'vue-ionicons/dist/ios-beer.vue';
import IosChatboxes from 'vue-ionicons/dist/ios-chatboxes.vue';
import IosCog from 'vue-ionicons/dist/ios-cog.vue';
import IosColorWand from 'vue-ionicons/dist/ios-color-wand.vue';

import IosThumbsUp from 'vue-ionicons/dist/ios-thumbs-up.vue';
import IosThumbsDown from 'vue-ionicons/dist/ios-thumbs-down.vue';
import IosThunderstorm from 'vue-ionicons/dist/ios-thunderstorm.vue';
import IosTrophy from 'vue-ionicons/dist/ios-trophy.vue';
import IosWarning from 'vue-ionicons/dist/ios-warning.vue';

import IosFlash from 'vue-ionicons/dist/ios-flash.vue';
import IosFlame from 'vue-ionicons/dist/ios-flame.vue';
import IosHeart from 'vue-ionicons/dist/ios-heart.vue';
import IosMegaphone from 'vue-ionicons/dist/ios-megaphone.vue';
import IosNuclear from 'vue-ionicons/dist/ios-nuclear.vue';
import IosPizza from 'vue-ionicons/dist/ios-pizza.vue';
import IosRibbon from 'vue-ionicons/dist/ios-ribbon.vue';
import IosStar from 'vue-ionicons/dist/ios-star.vue';
import IosSunny from 'vue-ionicons/dist/ios-sunny.vue';
import IosRocket from 'vue-ionicons/dist/ios-rocket.vue';
import IosHappy from 'vue-ionicons/dist/ios-happy.vue';
import IosGift from 'vue-ionicons/dist/ios-gift.vue';

export default {
  name: 'KudoIcon',
  props: ['name', 'color'],
  components: {
    IosMedal,
    IosBeer,
    IosBulb,
    IosChatboxes,
    IosCog,
    IosColorWand,
    IosThumbsUp,
    IosThumbsDown,
    IosThunderstorm,
    IosTrophy,
    IosWarning,
    IosFlash,
    IosFlame,
    IosHeart,
    IosMegaphone,
    IosNuclear,
    IosPizza,
    IosRibbon,
    IosStar,
    IosSunny,
    IosRocket,
    IosHappy,
    IosGift,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/bootstrap';

</style>

