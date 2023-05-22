// 导入 defineStore方法 定义一个Store 【stores/counter.js】
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getBlogListAPI } from '../apis/mysqlAPI.js'

export const blogStore = defineStore('blog', () => {
  // 定义数据(state)
  const blogList = ref([])

  // 定义获取数据的方法
  const getBlogList = () => {
    const res = getBlogListAPI()
    // console.log(res);
    blogList.value = res
  }


  // 最后，以对象的方式，共享供组件使用
  return { blogList, getBlogList }
})