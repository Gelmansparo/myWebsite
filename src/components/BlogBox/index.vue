<template>
  <div class="blog-box">
    <h1 @click="$router.push('/home/blog/' + id)">{{ title }}</h1>
    <p>{{ body }}</p>
    <div class="flexBox">
      <div class="flexLeft">
        <el-tag
          v-for="(item, index) in tags"
          :key="item"
          :type="colorArr[index]"
          >{{ item }}</el-tag
        >
      </div>
      <div class="flexRight">
        <em>{{ date }}</em>
      </div>
    </div>
    <i></i>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  id: [Number, String],
  title: String,
  body: String,
  tags: Array,
  date: String,
});
const colorArr = ref(["", "success", "warning", "danger", "info"]);
</script>

<style lang="scss" scoped>
.blog-box {
  padding: 5px 10px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-items: flex-end;
  .flexBox {
    display: flex;
    justify-content: space-between;
    .flexLeft {
      .el-tag {
        margin-right: 10px;
      }
    }
    .flexRight {
      font-size: 12px;
      color: #a9a9a9;
      line-height: 24px;
    }
  }

  h1 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    cursor: pointer;
    transition: all 1s;

    &:hover {
      opacity: 0.8;
    }
  }

  p {
    color: #a9a9a9;
    // width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  i {
    display: block;
    width: 30%;
    border-bottom: 2px solid #888888;
    opacity: 0.5;
  }
}
</style>