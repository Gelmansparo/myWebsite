<template>
  <div class="blog-box">
    <h1 @click="$router.push('/home/blog/' + id)">{{ title }}</h1>
    <p>{{ body }}</p>
    <div>
      <span v-for="item in tags" :key="item">{{ item }}</span>
    </div>
    <i></i>
  </div>
</template>

<script setup>
defineProps({
  id: [Number, String],
  title: String,
  body: String,
  tags: Array,
});
</script>

<style lang="scss" scoped>
.blog-box {
  padding: 5px;
  margin-left: 50px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
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