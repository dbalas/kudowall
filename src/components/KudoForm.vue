<template lang="pug">
.kudo-form
  .row
    .col.text-center
      h4.m-0.text-muted {{ $t('New kudo') }}
  .card
    .row.align-items-center
      .col-12.col-sm-6.form-part.pr-0
        form.m-4(@submit="add")
          .form-group.d-flex.justify-content-center.align-items-center
            input.form-control(
              v-model="kudo.title"
              type='text',
              :placeholder="$t('Give to your kudos a title')"
            )
            popper(trigger='click', :force-show="showPopIcon")
              .popper
                kudo-icon.popper-icon.p-1(
                  v-for="(icon, index) in icons",
                  :key="icon",
                  :name="icon",
                  :color="kudo.styles.headerIconColor",
                  @click.native="selectIcon(icon)"
                )
              .kudo-icon(slot="reference")
                kudo-icon.p-1.ml-1(
                  @click.native="showPopIcon = !showPopIcon",
                  :name="kudo.icon",
                  :color="kudo.styles.headerIconColor",
                )
          .form-group
            textarea(
              v-model="kudo.content"
              class="form-control",
              rows="3",
              :placeholder="$t('Write your kudos here for someone who deserves it!')"
            )
          .form-group
            input.form-control(
              v-model="kudo.image"
              type='url',
              class="form-control",
              :placeholder="$t('You can use an image too. E.g: https://images.com/photo.jpg')"
            )
          .form-group
            swatches(
              v-model="kudo.styles.headerBkgColor",
              colors="text-advanced",
            )
            swatches(
              v-model="kudo.styles.headerColor",
              colors="text-advanced",
            )
            swatches(
              v-model="kudo.styles.headerIconColor",
              colors="text-advanced",
            )
      .col-12.col-sm-6.kudo-part.pl-0
        kudo.card.m-4(
          :title="kudo.title",
          :content="kudo.content",
          :image="kudo.image"
          :icon="kudo.icon"
          :styles="kudo.styles"
        )
  .row.mt-4.justify-content-center
    .col-md-4.col-sm-6.col-12.text-center
      button.btn.btn-primary.btn-lg.btn-block(type='submit') {{ $t('Submit') }}
</template>

<script>
import Popper from 'vue-popperjs';
import Swatches from 'vue-swatches';
import Kudo from './Kudo/Kudo.vue';
import KudoIcon from './Kudo/KudoIcon.vue';

export default {
  name: 'KudoForm',
  data() {
    return {
      showPopIcon: false,
      icons: [
        'ios-medal',
        'ios-beer',
        'ios-bulb',
        'ios-chatboxes',
        'ios-cog',
        'ios-color-wand',
        'ios-thumbs-up',
        'ios-thumbs-down',
        'ios-thunderstorm',
        'ios-trophy',
        'ios-warning',
        'ios-flash',
        'ios-flame',
        'ios-heart',
        'ios-megaphone',
        'ios-nuclear',
        'ios-pizza',
        'ios-ribbon',
        'ios-star',
        'ios-sunny',
        'ios-rocket',
      ],
      kudo: {
        title: 'Thank you Benito',
        content: 'Always a pleasure to work with you!',
        icon: 'ios-medal',
        styles: {
          headerBkgColor: 'rgb(239, 239, 239)',
          headerColor: 'rgb(224, 102, 102)',
          headerIconColor: 'rgb(241, 194, 50)',
        },
      },
    };
  },
  methods: {
    add() {
      console.log('as');
    },
    selectIcon(icon) {
      this.kudo.icon = icon;
      this.showPopIcon = false;
    },
  },
  components: {
    Kudo,
    KudoIcon,
    Swatches,
    Popper,
  },
};
</script>

<style lang="scss">
@import '../assets/bootstrap';

.kudo-form > .card {
  @include media-breakpoint-down(xs) {
    box-shadow: none;
    padding: 0;
  }
}

.card {
  margin-top: 0;
  border: none;
  border-radius: 2px;
  box-shadow: 1px 1px 5px #d8d8d8;
  background-color: #FFFFFF;
}

.form-part {
  border-right: 2px solid $gray-200;

  @include media-breakpoint-down(xs) {
    border-right: 0;
  }
}

.vue-swatches {
  display: inline-block;
  margin-right: 0.5rem;
}

.vue-swatches__trigger {
  border-radius: 0 !important;
  border: 1px solid $gray-200;
}

.kudo-icon .ion {
  height: 38px;
  border: 1px solid $gray-400;
  cursor: pointer;
}


.popper-icon {
  cursor: pointer;
  display: inline-block;
}

</style>

