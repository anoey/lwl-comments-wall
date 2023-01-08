<template>
  <article>
    <h1 class="header">{{ user }}</h1>
    <p class="bodytext">{{ content }}</p>
    <p class="timetext">{{ new Date(time).toLocaleString() }}</p>
  </article>
</template>

<script setup>
defineProps({
  content: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>
article {
  font-family: 'Helvetica Neue', Helvetica, 'Lucida Grande', 'Lucida Sans Unicode', Arial, Verdana, sans-serif;
  padding-bottom: 50px;
}

.header {
  font-size: 16px;
  margin-bottom: 0px;
  line-height: 1.35;
  padding-bottom: 5px;
  color: #000;
}
.bodytext {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
  color: #76797c;
}
.timetext {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;
  color: #999;
}
</style>