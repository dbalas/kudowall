<template lang="pug">
.slack-user.d-flex.align-items-center(@click="$emit('click')")
    img.profile-image(:src="image")
    .text-content
        p.name {{ name }}
        p.title.text-muted {{ title }}
</template>

<script>


export default {
  name: 'SlackUser',
  props: ['image', 'name', 'title'],
};
</script>

<style lang="scss" scoped>
@import '../../assets/bootstrap';

.slack-user {
  padding: 0.7rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: $gray-100;
  }

  .profile-image {
    border-radius: 50%;
    width: 50px;
    height: auto;
  }

  .text-content {
    margin-left: 1rem;

    .name {
      font-size: 1.1rem;
      font-weight: 500;
      margin-bottom: 0;
    }

    .title {
      margin-bottom: 0;
    }
  }
}

</style>

