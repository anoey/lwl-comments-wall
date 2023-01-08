<script setup lang="ts">
import CommentQuene from './components/CommentQuene.vue';
import Paper from './components/Paper.vue';
</script>

<template>
  <Paper>
    <Suspense>
      <CommentQuene />
      <template #fallback>
        <div style="text-align: center;">Loading...</div>
      </template>
    </Suspense>
  </Paper>
</template>

<style scoped>
</style>
