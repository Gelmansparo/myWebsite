<template>
  <div class="tag">
    <div v-if="posts.length" class="layout">
      <PostList :postArr="postsWithTag" />
      <TagCloud :postArr="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import getPosts from "../utils/getPosts.js";

import Spinner from "../components/Spinner.vue";
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";

const route = useRoute();

const { posts, load } = getPosts();
load();

const postsWithTag = computed(() => {
  return posts.value.filter((x) => x.tags.includes(route.params.tag));
});
</script>

<style scoped>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>