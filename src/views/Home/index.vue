<template>
  <div class="boxInfo">
    <div class="counterLeft">
      <div class="touxiang"></div>
      <h2>OneV's</h2>
      <h2>Den</h2>
      <p>言念君子，温其如玉</p>
      <hr />
      <p class="jieshao">
        嗨，我是姚宇霆。
        一名web前端的程序猿，现居河北保定，正在修行，探求创新之源。
      </p>
      <div class="grow"></div>
      <div class="tags"></div>
    </div>

    <RouterView />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.boxInfo {
  display: flex;
  .counterLeft {
    background-image: url("../../assets/images/bkg2.png");
    background-size: cover;
    width: 320px;
    height: 500px;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .touxiang {
      width: 120px;
      height: 120px;
      background-image: url("../../assets/images/favicon.png");
      background-size: cover;
      border: 5px solid white;
      border-radius: 50%;
    }
    h2 {
      color: white;
      margin: 0;
      padding: 0;
      font-size: 45px;
      font-weight: 400;
    }
    .jieshao {
      width: 200px;
    }
    .grow {
      flex: 1;
    }
  }
}
</style>