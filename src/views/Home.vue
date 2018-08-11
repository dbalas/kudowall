<template lang="pug">
  .home
    .container-fluid
      kudo-list(:kudos="kudos")
</template>

<script>
import KudoList from '@/components/KudoList.vue';

export default {
  name: 'Home',
  data() {
    return {
      kudos: [{
        id: 3849243,
        title: 'Thank you',
        content: 'Thank you so much Thank you so much',
        icon: 'ios-medal',
        styles: {
          headerBkgColor: '#F9FF',
          headerColor: '#FFFFFF',
          headerIconColor: '#FFFFFF',
        },
      }, {
        id: 38492432,
        title: 'Thank you',
        content: 'Thank you so much Thank you so muchThank you so much Thank you so much',
        icon: 'ios-medal',
      }, {
        id: 38492343,
        title: 'Thank you',
        content: 'Thank you so much',
        image: 'https://images.pexels.com/photos/374103/pexels-photo-374103.jpeg',
      }, {
        id: 38469243,
        content: 'Thank you so much Thank you so much Thank you so muchThank you so much Thank you so muc Thank you so much Thank you so muchThank you so much Thank you so muc Thank you so much Thank you so muchThank you so much Thank you so muc Thank you so much Thank you so muchThank you so much Thank you so muc',
        icon: 'ios-medal',
      }],
    };
  },
  created() {
  },
  components: {
    KudoList,
  },
};
</script>
