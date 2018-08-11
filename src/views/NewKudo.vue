<template lang="pug">
.new-kudo.py-5
  .container
    .row.justify-content-center.align-items-center
      .col
        kudo-form
</template>

<script>
import KudoForm from '@/components/KudoForm.vue';

export default {
  name: 'NewKudo',
  components: {
    KudoForm,
  },
};
</script>

<style lang="scss">
@import '../assets/bootstrap';

</style>
