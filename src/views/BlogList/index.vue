<template>
  <div class="counterRight">
    <div class="search">
      <el-input v-model="input" placeholder="Search" clearable />
      <button @click="store.pushList">666</button>
    </div>
    <BlogBox
      v-for="item in arr"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :body="item.body"
      :tags="item.tags"
    />
    <div class="example-pagination-block pages">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
  </div>
</template>

<script setup>
import BlogBox from "../../components/BlogBox/index.vue";
import { ref } from "vue";
import { blogStore } from "../../stores/blog.js";
const store = blogStore();
const arr = ref([]);
const input = ref("");

arr.value = store.blogList;
// console.log(blogStore);
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