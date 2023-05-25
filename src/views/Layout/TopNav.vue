<template>
  <div class="top-nav">
    <el-menu
      popper-effect="light"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      router
    >
      <h1>HL Blog</h1>

      <div class="flex-grow" />
      <el-menu-item index="/">首页</el-menu-item>
      <el-sub-menu index="/main">
        <template #title>博客管理</template>
        <el-menu-item index="/create">添加博客</el-menu-item>
        <!-- <el-menu-item index="/main/run">后台管理</el-menu-item> -->
        <el-menu-item index="/github">Go Github</el-menu-item>
        <el-menu-item index="/gitee">Go Gitee</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import { useRouter } from "vue-router";
// const router = useRouter();

// const activeIndex = ref("1");
const handleSelect = (key, keyPath) => {
  // "https://github.com/Gelmansparo/myWebsite"
  // console.log(key, keyPath);
  if (key === "/github") {
    window.location = "https://github.com/Gelmansparo/myWebsite";
  }
  if (key === "/gitee") {
    window.location = "https://gitee.com/yaoyuting1";
  }
};
</script>

<style lang="scss" scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  // height: 58px;
  // min-width: 1200px;
  // display: flex;

  h1 {
    line-height: 58px;
    color: #666;
    padding-left: 10px;
  }

  .flex-grow {
    // flex-grow: 1;
    flex: 1;
  }
}
.el-menu-demo {
  // position: fixed;
  // top: 0;
  // left: 0;
  display: flex;
  justify-content: space-between;
}
</style>