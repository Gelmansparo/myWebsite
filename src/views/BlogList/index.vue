<template>
  <div class="counterRight">
    <div class="search">
      <el-input v-model.trim.lazy="input" placeholder="Search" clearable />
      <LinkHot />
    </div>

    <el-scrollbar ref="scrollbarRef" height="800px" always>
      <div ref="innerRef">
        <BlogBox
          v-for="item in searchArray"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :body="item.body"
          :tags="item.tags"
          :date="item.date"
        />
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import BlogBox from "../../components/BlogBox/index.vue";
import LinkHot from "../../components/LinkHot/index.vue";
import { computed, ref, onMounted } from "vue";
import { blogStore } from "../../stores/blog.js";
const store = blogStore();
const arr = ref([]);
const input = ref("");

arr.value = store.blogList;

const searchArray = computed(() => {
  return arr.value.filter((item) => item.title.includes(input.value));
});
</script>

<style lang="scss" scoped>
.counterRight {
  background: white;
  flex: 1;
  .search {
    width: 95%;
    margin: 0 auto;
    padding-top: 5px;
  }
}
.pages {
  display: flex;
  justify-content: center;
}
</style>