<template>
  <div class="quene">
    <CommentVue :content="comment.content" :user="comment.user" :time="comment.time" v-for="comment in comments"
      :key="comment._id" />
  </div>
</template>

<script setup lang="ts">
import CommentVue from './Comment.vue';
import { getComments } from '../Utils/getComments';

import { Ref, ref } from 'vue';

interface Comment {
  _id: string;
  content: string;
  user: string;
  time: number;
}

const comments: Ref<Array<Comment>> = ref(await getComments());
const ONE_MINUTE = 60 * 1000;

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
  overflow: hidden;
}

@media only screen and (max-device-width: 480px) {
  .quene {
    margin: 0;
    padding: 25px 20px;
  }
}
</style>