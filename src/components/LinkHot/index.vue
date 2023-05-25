<template>
  <div class="link-box">
    <div class="link-item">
      <RouterLink
        :to="`/home/tags/${hot}`"
        class="linkItem"
        v-for="hot in hotArray"
        :key="hot"
        :style="{
          boxShadow: `var(--el-box-shadow)`,
        }"
      >
        #{{ hot }}
      </RouterLink>
    </div>
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
  padding-top: 20px;
  .link-item {
    display: flex;
    flex-wrap: wrap;
    .linkItem {
      border: 1px solid #dedfe0;
      border-radius: 15px;
      padding: 0 5px;
      margin-right: 10px;
      margin-bottom: 5px;
    }
  }
}
</style>