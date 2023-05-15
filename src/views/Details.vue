<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <button @click="PutPost">编辑</button>
      <button @click="DelPost">删除</button>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script setup>
import getPost from "../utils/getPost.js";
import Spinner from "../components/Spinner.vue";
import axios from "axios";

// 使用 props 拿到 props.id
// const { post, load, error } = getPost(props.id);

// 使用 route 拿到 params.id
import { useRoute } from "vue-router";
const route = useRoute();
const { post, load, error } = getPost(route.params.id);
load();

const props = defineProps({
  id: [Number, String],
});

const DelPost = () => {
  console.log(post.value.id);
  axios.delete("http://localhost:3000/posts/" + post.value.id);
};

const PutPost = async () => {
  console.log(post.value.id);
  const Str = post.value.body + "~";
  const res = await axios.patch(
    "http://localhost:3000/posts/" + post.value.id,
    {
      body: Str,
    }
  );
  console.log(res);
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>