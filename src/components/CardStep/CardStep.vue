<template lang="pug">
.card-step.h-100
  .row.align-items-center.justify-content-center.h-100
    .col-12.col-sm-10.col-md-6.col-lg-5.col-xl-4.px-4
      kudo-editable.card(v-if="kudo", :kudo="kudo", v-model="content")
      .confirm-button.text-center.pt-3
        button.btn.btn-primary.btn-lg(
          @click="confirm",
          type='submit'
        ) {{ $t('Submit') }}
</template>

<script>
import KudoEditable from '@/components/Kudo/KudoEditable.vue';

export default {
  name: 'CardStep',
  props: ['kudo'],
  data() {
    return {
      content: null,
    };
  },
  created() {},
  computed: {},
  methods: {
    confirm() {
      this.$emit('confirm', this.content);
    },
  },
  components: {
    KudoEditable,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/bootstrap';

.card-step {

}
</style>

