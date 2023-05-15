<template>
  <div class="post">
    <router-link :to="'/details/' + post.id">
      <!-- <router-link :to="{ name: 'Details', params: { id: post.id } }"> -->
      <h3>{{ post.title }}</h3>
    </router-link>

    <p>{{ bodySnippet }}</p>
    <span v-for="item in post.tags" :key="item">#{{ item }}&nbsp;</span>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  post: Object,
});

const bodySnippet = computed(() => {
  return props.post.body.substring(0, 20) + "...";
});
</script>

<style scoped>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
}
</style>