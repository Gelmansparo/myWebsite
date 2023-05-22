<template>
  <div class="top-nav">
    <el-menu
      :default-active="activeIndex"
      popper-effect="light"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      router
    >
      <h1>个人博客</h1>

      <div class="flex-grow" />
      <el-menu-item index="/">首页</el-menu-item>
      <el-sub-menu index="/main">
        <template #title>后台管理</template>
        <el-menu-item index="/main/personal">个人中心</el-menu-item>
        <el-menu-item index="/main/run">后台管理</el-menu-item>
        <el-menu-item index="/main/setup">设置</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import { useRouter } from "vue-router";
// const router = useRouter();

const activeIndex = ref("1");
const handleSelect = (key, keyPath) => {
  // console.log(key, keyPath);
  // router.push(key);
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