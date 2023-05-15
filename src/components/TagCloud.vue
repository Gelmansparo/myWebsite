<template>
  <div class="tag-cloud">
    <h3>标签</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }"
        >#{{ tag }}</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const tags = ref([]);
// const tagsArray = []; 这样数组会重复
// 使用 ES6 新数据类型 Set
const tagSet = new Set();

props.postArr.forEach((x) => {
  x.tags.forEach((tag) => tagSet.add(tag));
});

// tags.value = tagSet;
// { "Set(10)": [ "vue3", "vue2"... ] }
// 这里用展开的方法，传递Set 出一个 数组类型
tags.value = [...tagSet];

const props = defineProps({
  postArr: Array,
});
</script>

<style scoped>
.tag-cloud {
  padding: 10px;
}
.tag-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.tag-cloud a {
  color: #ccc;
  text-decoration: none;
}
.tag-cloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>