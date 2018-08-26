<template lang="pug">
nav.navbar.navbar-expand-md.navbar-dark.bg-primary
  .navbar-collapse.collapse.w-100.order-1.order-md-0
    ul.navbar-nav.mr-auto
  .title-navbar.mx-auto.order-0.d-flex.align-items-center.justify-content-between
    router-link.navbar-brand.mx-auto(to="/") KUDOWALL
    .collapsed
      router-link.mx-2(to="/new")
          add-circle-outline-icon(:title="$t('Add new kudos')", w="25px", h="25px")
      a.mx-2(href='#', @click="toggleFullscreen")
          component(:is="fullscreenIcon", :title="$t('Add new kudos')", w="25px", h="25px")
  .navbar-collapse.collapse.w-100.order-3
    ul.navbar-nav.ml-auto
      li.nav-item.mx-2.my-auto(v-if="!isFullscreen")
        router-link.nav-link(to="/new")
          button.btn.btn-sm.btn-outline-light(type='button')
            add-circle-outline-icon(:title="$t('Add new kudos')", w="25px", h="25px")
            span {{ $t('New Kudo') }}
      li.nav-item.mx-2.my-auto
        a.nav-link(href='#', @click="toggleFullscreen")
          component(:is="fullscreenIcon", :title="$t('Add new Kudo')", w="25px", h="25px")
</template>

<script>
import { init, destroy, enter, exit } from '@/lib/fullscreen';
import ExpandIcon from 'vue-ionicons/dist/md-expand.vue';
import ContractIcon from 'vue-ionicons/dist/md-contract.vue';
import AddCircleOutlineIcon from 'vue-ionicons/dist/md-add-circle-outline.vue';

export default {
  name: 'Navbar',
  data() {
    return {
      isFullscreen: false,
    };
  },
  created() {
    init((isFullscreen) => {
      this.isFullscreen = isFullscreen;
    });
  },
  destroy() {
    destroy();
  },
  methods: {
    toggleFullscreen() {
      if (this.isFullscreen) exit();
      else enter();
    },
  },
  computed: {
    fullscreenIcon() {
      return (this.isFullscreen) ? 'contract-icon' : 'expand-icon';
    },
  },
  components: {
    ExpandIcon,
    ContractIcon,
    AddCircleOutlineIcon,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/bootstrap';
.navbar {
  padding: 0.6rem;
  -webkit-box-shadow: 0 2px 2px $gray-200;
  -moz-box-shadow: 0 2px 2px $gray-200;
  box-shadow: 0 2px 2px $gray-200;

  .ion, a {
    color: white;
    transition: color 0.15s ease-in-out;
    &:hover {
      color: darken($primary, 20) !important;
    }
  }

  .btn:hover {
    .ion {
      color: darken($primary, 20);
    }
  }
}

.nav-link {
  padding: 0 1rem;
}

.navbar-brand {
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 0.5rem;
  text-align: center;
}


.collapsed {
  display: none !important;

  @media (max-width: 770px) {
    display: inherit !important;
  }
}

.title-navbar {
  .navbar-brand {
    @media (max-width: 770px) {
      margin-top: -3px;
      position: relative;
      right: -3rem !important;
    }

    @media (max-width: 390px) {
      margin-left: 0 !important;
      margin-right: 0 !important;
      right: 0 !important;
    }
  }

  @media (max-width: 770px) {
    width: 100%;
    margin: inherit !important;
  }
}
</style>

