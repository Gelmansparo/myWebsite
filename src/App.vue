<script setup>
import TopNav from "./views/Layout/TopNav.vue";
</script>

<template>
  <div class="blogBox">
    <TopNav />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blogBox {
  padding: 0 10px;
  h1 {
    color: #333;
  }

  .content {
    // max-width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
    // height: 300px;
    // border-radius: 15px;
    // background: linear-gradient(
    //   to right bottom,
    //   agba(255,255,255,.7),
    //   agbg(255,255,255,.5),
    //   agbb(255,255,255,.4),
    // );
    background: white;
    // opacity: 0.3;
    backdrop-filter: blur(10px);
    // box-shadow: 0 0 20px #a29bfe;
    margin-top: 78px;
  }
}
</style>