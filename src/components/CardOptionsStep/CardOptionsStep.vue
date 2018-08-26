<template lang="pug">
div.h-100(v-bar)
  .card-options-step.h-100
    .container-fluid.h-100
      .row.justify-content-center.h-100
        .col-12.col-xl-10
          kudo-list(
            :kudos="kudos",
            :defaultKudo="kudo",
            :isSelection="true",
            @select="select")
</template>

<script>
import KudoList from '@/components/KudoList.vue';
import kudos from '@/kudoTemplates';

export default {
  name: 'CardOptionsStep',
  props: ['kudo'],
  data() {
    return {
      kudos,
    };
  },
  methods: {
    select(kudo) {
      this.$emit('select', kudo);
    },
  },
  components: {
    KudoList,
  },
};
</script>
