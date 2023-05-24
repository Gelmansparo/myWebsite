<template>
  <div class="boxInfo" :class="{ valueFlex: flexBol }">
    <div class="counterLeft" v-if="routeName" :class="{ valueFlex: flexBol }">
      <div class="touxiang"></div>
      <h2>OneV's<span v-if="!flexBol">Den</span></h2>
      <h2 v-if="flexBol">Den</h2>
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
import { ref, onMounted, watch, computed } from "vue";
const flexBol = ref(true);
const bodyWidth = ref(window.innerWidth);
import { useRoute } from "vue-router";
const route = useRoute();
const routeName = ref(true);

watch(
  [bodyWidth],
  (newVal, oldVal) => {
    if (newVal > 500) {
      flexBol.value = true;
    } else {
      flexBol.value = false;
    }
  },
  { immediate: true }
);

const pathNameArr = ["BlogList", "TagSearch"];
watch(
  () => route.name,
  () => {
    if (pathNameArr.includes(route.name)) {
      routeName.value = true;
    } else {
      routeName.value = false;
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.boxInfo {
  &.valueFlex {
    display: flex;
  }
  .counterLeft {
    background-image: url("../../assets/images/bkg2.png");
    background-size: cover;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-radius: 15px;
    &.valueFlex {
      width: 320px;
      margin-right: 30px;
      height: 900px;
    }

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