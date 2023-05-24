<template>
  <div class="create-change">
    <el-page-header @back="$router.go(-1)">
      <template #content>
        <span class="text-large font-600 mr-3"> {{ title }} </span>
      </template>
      <div class="mt-4 text-sm font-bold">
        <el-form
          label-position="left"
          label-width="100px"
          :model="atBlogObj"
          :rules="rules"
          ref="formRef"
        >
          <el-form-item label="标题" prop="title">
            <el-input v-model="atBlogObj.title" />
          </el-form-item>
          <el-form-item label="内容" prop="body">
            <el-input v-model="atBlogObj.body" type="textarea" />
          </el-form-item>
          <el-form-item label="标签">
            <el-input v-model.trim="tag" />
            <div>
              <el-button @click="addTag" type="success" round
                >添加标签</el-button
              >
            </div>
          </el-form-item>
          <div>
            <el-tag
              v-for="(item, i) in atBlogObj.tags"
              :key="item"
              :type="typeArr[i]"
              style="margin-right: 5px"
              closable
              @close="removeTag(i)"
              >{{ item }}</el-tag
            >
          </div>
          <hr />
          <div v-if="type === 'create'" class="submit-box">
            <el-button type="success" round @click="createBlog">添加</el-button>
          </div>
          <div v-if="type === 'change'" class="submit-box">
            <el-button type="success" round @click="changeBlog">修改</el-button>
          </div>
        </el-form>
      </div>
    </el-page-header>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { blogStore } from "../../stores/blog.js";
const store = blogStore();
const route = useRoute();
const router = useRouter();

const props = defineProps({
  type: {
    validator(value) {
      return ["create", "change"].includes(value);
    },
    required: true,
  },
  id: [String, Number],
  title: String,
});
const typeArr = ["", "success", "warning", "danger", "info"];
const removeTag = (i) => {
  atBlogObj.value.tags.splice(i, 1);
};
const tag = ref("");
const addTag = () => {
  if (!tag.value) {
    return ElMessage.warning("标签内容不能为空.");
  }
  if (atBlogObj.value.tags.length >= 5) {
    return ElMessage.warning("标签最多为5个.");
  }
  if (atBlogObj.value.tags.includes(tag.value)) {
    console.log(!atBlogObj.value.tags.includes(tag.value), tag.value);
    return ElMessage.warning("标签内容不能重复.");
  }

  atBlogObj.value.tags.push(tag.value);
  tag.value = "";
};
onMounted(() => {
  const date = new Date();
  let Y = date.getFullYear();
  let M = date.getMonth() + 1;
  let D = date.getDate();
  M = M < 10 ? "0" + M : M;
  D = D < 10 ? "0" + D : D;
  atBlogObj.value.date = `${Y}-${M}-${D}`;
});
const rules = ref({
  title: [{ required: true, message: "标题不能为空！", trigger: "change" }],
  body: [{ required: true, message: "主体内容不能为空！", trigger: "change" }],
});
const formRef = ref(null);
const atBlogObj = ref({
  id: 0,
  title: "",
  body: "",
  tags: [],
  date: "",
});

// --情况1：用户选择创建新帖子
const createBlog = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      // 使用创建API
      store.pushBlog(atBlogObj.value);
      ElMessage.success("创建成功.");
      router.push("/");
    } else {
      ElMessage.warning("请完成表单填写.");
    }
  });
};

// --情况2：用户修改帖子内容
onMounted(() => {
  if (route.params.id) {
    const item = store.blogList.find((item) => item.id == route.params.id);
    atBlogObj.value.id = item.id;
    atBlogObj.value.title = item.title;
    atBlogObj.value.body = item.body;
    atBlogObj.value.tags = item.tags;
  }
});
const changeBlog = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      // 使用创建API
      store.changeBlog(atBlogObj.value);
      ElMessage.success("修改成功.");
    } else {
      ElMessage.warning("请完成表单填写.");
    }
  });
};
</script>

<style lang="scss" scoped>
.submit-box {
  display: flex;
  flex-direction: row-reverse;
}
</style>