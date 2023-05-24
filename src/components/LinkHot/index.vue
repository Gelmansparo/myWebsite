<template>
  <div class="link-box">
    <RouterLink
      :to="`/home/tags/${hot}`"
      class="linkItem"
      v-for="hot in hotArray"
      :key="hot"
    >
      #{{ hot }}
    </RouterLink>
    <BlogBox
      v-for="item in hotTagBlorArray"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :body="item.body"
      :tags="item.tags"
    />
  </div>
</template>

<script setup>
import BlogBox from "../BlogBox/index.vue";
import { ref, computed } from "vue";
import { blogStore } from "../../stores/blog.js";
import { useRoute } from "vue-router";
const store = blogStore();
const route = useRoute();

// 标签循环
const hotArray = ref([]);
const hotSet = new Set();
store.blogList.forEach((item) => {
  item.tags.forEach((item) => hotSet.add(item));
});
hotArray.value = [...hotSet];

const hotTagBlorArray = computed(() => {
  return store.blogList.filter((item) => item.tags.includes(route.params.tag));
});
</script>

<style lang="scss" scoped>
.link-box {
  width: 95%;
  margin: 0 auto;
  padding-top: 5px;
}
</style>