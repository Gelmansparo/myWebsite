<script setup>
import SinglgPost from "../components/SinglePost.vue";
import { onMounted, onUnmounted, onUpdated } from "vue";
defineProps({
  postArr: Array,
});
</script>

<template>
  <div class="PostList">
    <div v-for="item in postArr" :key="item.id">
      <SinglgPost :post="item" />
    </div>
  </div>
</template>


<style>
</style>