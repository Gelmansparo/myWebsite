<template>
  <div class="blogDetails">
    <el-page-header @back="$router.go(-1)">
      <template #content>
        <span class="text-large font-600 mr-3"> {{ blogObj.title }} </span>
      </template>
      <div class="mt-4 text-sm font-bold tags-events">
        <div class="tags">
          <el-tag
            v-for="(item, index) in blogObj.tags"
            :key="item"
            :type="colorArr[index]"
            class="tag"
            >{{ item }}</el-tag
          >
        </div>
        <div class="events">
          <el-popconfirm
            @confirm="$router.push(`/changeblog/${route.params.id}`)"
            title="确认编辑文章"
            hide-icon
          >
            <template #reference>
              <el-button type="primary" :icon="Edit" circle />
            </template>
          </el-popconfirm>
          <el-button type="warning" :icon="Star" circle />
          <el-popconfirm
            title="确定要删除文章吗?"
            confirm-button-type="danger"
            hide-icon
            @confirm="deleteBlogId(blogObj.id)"
          >
            <template #reference>
              <el-button type="danger" :icon="Delete" circle />
            </template>
          </el-popconfirm>
        </div>
      </div>
      <div ref="innerHTMLBody" class="mt-4 text-sm font-bold blogBody"></div>
    </el-page-header>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { blogStore } from "../../stores/blog.js";
import { Delete, Edit, Star } from "@element-plus/icons-vue";
const store = blogStore();
const route = useRoute();
const router = useRouter();
const blogObj = store.blogList.find((item) => item.id == route.params.id);
const colorArr = ref(["", "success", "warning", "danger", "info"]);

const deleteBlogId = (id) => {
  store.deleteBlog(id);
  router.replace("/");
};

const innerHTMLBody = ref(null);
onMounted(() => {
  innerHTMLBody.value.innerHTML = blogObj.body;
});
</script>

<style lang="scss" scoped>
.blogDetails {
  flex: 1;
  .tags-events {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    .tags {
      .tag {
        margin-right: 5px;
      }
    }
    .events {
      position: relative;
      top: -3px;
    }
  }
  .blogBody {
    padding: 5px 5%;
  }
}
</style>