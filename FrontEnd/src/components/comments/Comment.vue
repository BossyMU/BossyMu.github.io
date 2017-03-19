<template>
  <div class="comment">
    <md-list-item>
      <md-avatar>
        <md-icon>account_circle</md-icon>
      </md-avatar>
      <div class="md-list-text-container">
        <span>{{ comment.user.email }}</span>
        <span>{{ comment.content }}</span>
      </div>
    </md-list-item>
  </div>
</template>

<script>

export default {
  name: 'comment',
  props: {
    comment: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>
  .md-list-item {
    padding-left: 40px;
  }
</style>
