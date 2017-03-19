<template>
  <div class="post">
    <span>{{ post.name }}</span>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>

export default {
  name: 'post',
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style>
</style>
