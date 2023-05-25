// 导入 defineStore方法 定义一个Store 【stores/counter.js】
import { defineStore } from 'pinia'
import { ref } from 'vue'
// import { getBlogListAPI } from '../apis/mysqlAPI.js'

export const blogStore = defineStore('blog', () => {
  // 定义数据(state)
  const blogList = ref([
    {
      title: "添加博客方法",
      body: "<p>点击右上角：<br>博客管理->添加博客</p><p>输入标题、内容、添加标签。</p><p>最后点击确定按钮，添加新博客。</p>",
      id: 1,
      tags: ["blog", "添加博客", "教程"],
      date: '2023.5.21'
    },
    {
      title: "修改博客方法",
      body: "<p>点击对应博客标题进入对应博客。</p><p>点击标题右下方蓝色按钮，再次确认进入修改博客页面。</p><p>修改博客内容。</p><p>最后点击修改按钮，完成博客内容修改。</p>",
      id: 2,
      tags: ["blog", "修改博客", "教程"],
      date: '2023.5.21'
    },
    {
      title: "搜索博客方法",
      body: "<h4>方法1：</h4><p>在首页搜索框，输入对应博客标题内容</p><h4>方法2：</h4><p>点击首页搜索框下方标签</p><p>根据点击对应标签，显示相对应标签的博客。</p>",
      id: 3,
      tags: ["搜索", "标签", "教程"],
      date: '2023.5.21'
    },
    {
      title: "删除博客方法",
      body: "<p>点击对应博客标题进入对应博客。</p><p>点击标题右下方红色删除按钮。</p>",
      id: 4,
      tags: ["blog", "删除博客", "教程"],
      date: '2023.5.22'
    },

  ])

  // 添加方法
  const pushBlog = (obj) => {
    const pushId = blogList.value[blogList.value.length - 1].id + 1
    obj.id = pushId
    blogList.value.push(obj)
  }
  // 删除方法
  const deleteBlog = (id) => {
    blogList.value = blogList.value.filter(x => x.id != id)
  }
  // 修改方法
  const changeBlog = (obj) => {
    const item = blogList.value.find(item => item.id == obj.id)
    item.title = obj.title
    item.body = obj.body
    item.tags = obj.tags
    item.date = obj.date
  }


  // 最后，以对象的方式，共享供组件使用
  return { blogList, pushBlog, deleteBlog, changeBlog }
}, { persist: true })