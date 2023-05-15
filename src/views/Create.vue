<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>标题:</label>
      <input v-model="title" type="text" required />
      <label>内容:</label>
      <textarea v-model="body" required></textarea>
      <label>标签 (回车添加标签):</label>
      <input @keydown.enter.prevent="handleKeydown" v-model="tag" type="text" />

      <div class="pill" v-for="item in tags" :key="item">#{{ item }}</div>

      <button>添加</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();

const title = ref("");
const body = ref("");
const tags = ref([]);
const tag = ref("");

const handleKeydown = () => {
  // 当用户输入的标签在标签数组中查询不到时
  if (!tags.value.includes(tag.value)) {
    tag.value = tag.value.replace(/\s/g, "");

    tags.value.push(tag.value);
  }
  tag.value = "";
};

const handleSubmit = async () => {
  // 准备数据
  const post = {
    id: Math.floor(Math.random() * 10000),
    title: title.value,
    body: body.value,
    tags: tags.value,
  };

  const res = await axios.post("http://localhost:3000/posts", post);
  console.log(res);

  if (res.status === 201) router.push("/home");
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  margin-bottom: 10px;
}

button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>