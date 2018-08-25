<template lang="pug">
  nav.navbar.navbar-expand-md.navbar-dark.bg-primary
    .navbar-collapse.collapse.w-100.order-1.order-md-0
      ul.navbar-nav.mr-auto
    .base-links.mx-auto.order-0.d-flex.align-items-center.justify-content-between
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
import ExpandIcon from 'vue-ionicons/dist/md-expand.vue';
import ContractIcon from 'vue-ionicons/dist/md-contract.vue';
import AddCircleOutlineIcon from 'vue-ionicons/dist/md-add-circle-outline.vue';

/* Get the documentElement (<html>) to display the page in fullscreen */
const elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

function isFullscreen() {
  return window.screenTop || window.screenY;
}

export default {
  name: 'Navbar',
  data() {
    return {
      isFullscreen: false,
    };
  },
  created() {
    document.addEventListener('webkitfullscreenchange', () => {
      this.isFullscreen = isFullscreen();
    }, false);

    document.addEventListener('mozfullscreenchange', () => {
      this.isFullscreen = isFullscreen();
    }, false);

    document.addEventListener('fullscreenchange', () => {
      this.isFullscreen = isFullscreen();
    }, false);
  },
  methods: {
    toggleFullscreen() {
      if (this.isFullscreen) closeFullscreen();
      else openFullscreen();
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

.navbar-brand {
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 0.5rem;
  text-align: center;
}

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

.collapsed {
  display: none !important;

  @media (max-width: 770px) {
    display: inherit !important;
  }
}

.base-links {
  @media (max-width: 770px) {
    width: 100%;
    margin: inherit !important;

    .navbar-brand {
      margin-top: -3px;
      position: relative;
      right: -3rem !important;
    }
  }

  @media (max-width: 390px) {
    .navbar-brand {
      margin-left: 0 !important;
      margin-right: 0 !important;
      right: 0 !important;
    }
  }
}
</style>

