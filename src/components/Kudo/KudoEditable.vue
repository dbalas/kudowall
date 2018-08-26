<template lang="pug">
kudo-base(:kudo="kudo")
  textarea(
    rows="5",
    @input="$emit('input', $event.target.value)",
    :value="value",
    :placeholder="$t('Write here your kudos :)')"
  )
</template>

<script>
import KudoBase from './KudoBase.vue';

export default {
  name: 'KudoEditable',
  props: ['kudo', 'value'],
  components: {
    KudoBase,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/bootstrap';

textarea {
  width: 100%;
  z-index: 100;
  position: relative;
  margin-top: 4px;
  line-height: 1.9;
  border: none;
  background:none;
  resize: none;
  overflow: hidden;
}
</style>

