<template>
  <div class="paper">
    <slot />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.paper {
  width: 95%;
  max-width: 980px;
  min-height: -webkit-fill-available;
  margin: 0px auto;
  background-color: #fff;
  overflow: hidden;
  border: 1px solid;
  border-color: #e5e5e5 #dbdbdb #d2d2d2;
  -webkit-box-shadow: rgb(0 0 0 / 30%) 0 1px 3px;
  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  box-shadow: rgb(0 0 0 / 30%) 0 1px 3px;
  margin-top: 20px;
}
</style>