<template>
  <div class="quene">
    <CommentVue :content="comment.content" :user="comment.user" :time="comment.time" v-for="comment in comments"
      :key="comment._id" />
  </div>
</template>

<script setup lang="ts">
import CommentVue from './Comment.vue';
import { getComments } from '../Utils/getComments';
import { getScrollHeight, getScrollTop, getWindowHeight } from '../Utils/screen';

import { onMounted, onUnmounted, ref, Ref } from 'vue';

interface Comment {
  _id: string;
  content: string;
  user: string;
  time: number;
}

const comments: Ref<Array<Comment>> = ref(await getComments());
const ONE_MINUTE = 60 * 1000;

async function loadMore() {
  if (getScrollHeight() - getScrollTop() - getWindowHeight() < 100) {
    comments.value = [...comments.value, ...(await getComments(undefined, comments.value.length))];
  }
}

onMounted(() => {
  window.addEventListener('scroll', loadMore)
});

setInterval(async () => {
  let data = await getComments();
  data = data.filter((comment: Comment) => {
    return !comments.value.some((c: Comment) => c._id === comment._id);
  });
  
  if (data.length > 0) {
    comments.value = [...data, ...comments.value];
  }
}, ONE_MINUTE);
</script>

<style scoped>
.quene {
  padding: 10px;
  margin: 0 100px;
  padding: 50px 120px;
  top: -190px;
  position: relative;
  overflow: hidden;
}

@media only screen and (max-device-width: 480px) {
  .quene {
    margin: 0;
    padding: 25px 20px;
  }
}
</style>