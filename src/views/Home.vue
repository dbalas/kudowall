<template lang="pug">
  .home
    .container
      kudo-list(:kudos="sortedKudos")
      transition(
        name="fade",
        appear,
        mode="out-in"
      )
        .row(v-if="!$apollo.loading && kudos.length === 0")
          .col.text-center.p-5
            h5.text-muted {{ $t('No kudos yet :(') }}
            p.lead
              span.d-inline-block {{ $t('Do you want to be the first?') }}
              router-link.d-inline-block(to="/new")
                add-circle-outline-icon.d-inline-block.ml-1(
                  title="Add new kudos",
                  w="25px",
                  h="25px"
                )
</template>

<script>
import AddCircleOutlineIcon from 'vue-ionicons/dist/md-add-circle-outline.vue';
import KudoSubscription from '@/graphql/subscriptions/KudoSubscription';
import ListKudos from '@/graphql/queries/ListKudos';
import KudoList from '@/components/KudoList.vue';

export default {
  name: 'Home',
  data() {
    return {
      kudos: [],
    };
  },
  computed: {
    sortedKudos() {
      return [...this.kudos].sort((kudoA, kudoB) => {
        const a = new Date(kudoA.createdAt);
        const b = new Date(kudoB.createdAt);
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
      });
    },
  },
  apollo: {
    kudos: {
      query: () => ListKudos,
      update: data => data.listKudos.items,
      subscribeToMore: {
        document: KudoSubscription,
        updateQuery: (prev, { subscriptionData: { data: { onCreateKudo } } }) => ({
          ...prev,
          listKudos: {
            __typename: 'KudoConnection',
            items: [
              onCreateKudo,
              ...prev.listKudos.items.filter(kudo => kudo.id !== onCreateKudo.id),
            ],
          },
        }),
      },
    },
  },
  components: {
    KudoList,
    AddCircleOutlineIcon,
  },
};
</script>

<style lang="scss">
  h5 {
    font-size: 1.5rem !important;
  }

  .lead {
    span, a {
      vertical-align: middle;
    }

    a {
      vertical-align: middle;
      line-height: 0;
    }
  }
</style>
