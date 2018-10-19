<template lang="pug">
.user-step.h-100
  .container-fluid.h-100
    .row.justify-content-center.align-items-center.h-100
      .col-12.col-sm-10.col-md-6.col-lg-5.col-xl-4
        .user-search.card.mb-3
          .input-group
            span.inner-icon
              ios-search-icon(w="25px", h="25px")
            input.form-control.form-control-lg(
              v-model="searchUser"
              type='text',
              :placeholder="$t('Search a user')",
              required
            )
            transition(name="fade")
              span.inner-right-icon(@click="removeSearch", v-show="searchUser")
                ios-close-icon(w="35px", h="35px")
        .users.card(:style="{height: height + 'px'}", v-bar)
          .users-container
            .loading.p-5.text-center(v-if="loading")
              looping-rhombuses-spinner(
                :animation-duration="2500"
                :rhombus-size="15"
                color="#2b97fd"
              )
            h6.p-5.text-center(v-if="!loading && !error && !users.length")
              span {{ $t('No users found :(') }}
            h6.p-5.text-center(v-if="!loading && error")
              span {{ $t('Unexpected error') }}
            slack-user(
              v-if="!loading && !error"
              v-for="user in users",
              :key="user.id",
              @click="select(user)"
              :image="user.profile.image_72"
              :name="user.profile.real_name"
              :title="user.profile.title"
            )
</template>

<script>
import latinize from 'latinize';
import Slack from 'slack';
import { LoopingRhombusesSpinner } from 'epic-spinners';
import IosSearchIcon from 'vue-ionicons/dist/ios-search.vue';
import IosCloseIcon from 'vue-ionicons/dist/ios-close.vue';
import SlackUser from './SlackUser.vue';

const token = process.env.VUE_APP_SLACK_API;
const slack = new Slack({ token });

export default {
  name: 'UserStep',
  data() {
    return {
      height: 500,
      searchUser: null,
      slackUsers: [],
      loading: true,
      error: false,
    };
  },
  created() {
    // eslint-disable-next-line
    this.handleResize();
    window.addEventListener('resize', this.handleResize);

    this.loading = true;
    slack.users.list().then((result) => {
      this.slackUsers = result.members;
      this.loading = false;
    }).catch(() => {
      this.slackUsers = [];
      this.loading = false;
      this.error = true;
    });
  },
  beforeDestroy() {
    // eslint-disable-next-line
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    users() {
      return this.slackUsers
        .filter((user) => {
          const name = latinize(user.profile.real_name).toLowerCase();
          let filter = !user.is_bot && user.id !== 'USLACKBOT';
          if (this.searchUser) {
            filter = filter && name.includes(this.searchUser);
          }
          return filter;
        }).sort((userA, userB) => {
          const nameA = userA.real_name;
          const nameB = userB.real_name;
          if (nameA > nameB) return 1;
          if (nameA < nameB) return -1;
          return 0;
        });
    },
  },
  methods: {
    select(user) {
      this.$emit('select', user);
    },
    removeSearch() {
      this.searchUser = null;
    },
    handleResize() {
      // eslint-disable-next-line
      const height = window.innerHeight;
      if (height < 650) {
        this.height = height - 150;
      } else {
        this.height = 500;
      }
    },
  },
  components: {
    LoopingRhombusesSpinner,
    IosSearchIcon,
    IosCloseIcon,
    SlackUser,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/bootstrap';

.placeholder-select {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0;
}

.users {
  border: 1px solid $gray-200;
  border-radius: 4px;
  overflow: auto;
}

.user-search {
  position: relative;
  border-radius: 4px;

  .inner-icon {
    position: absolute;
    top: 0.8rem;
    left: 0.5rem;
    z-index: 100;
  }

  .inner-right-icon {
    position: absolute;
    top: 0.5rem;
    right: 0.45rem;
    z-index: 100;

    .ion {
      cursor: pointer;
      color: $gray-300;
      &:hover {
        color: $gray-500;
      }
    }
  }

  .form-control {
    border-color: $gray-200;
    padding-left: 2.5rem;
    border-radius: 4px;
  }
}

.loading > div {
  display: inline-block;
}
</style>
