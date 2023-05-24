// 导入 defineStore方法 定义一个Store 【stores/counter.js】
import { defineStore } from 'pinia'
import { ref } from 'vue'
// import { getBlogListAPI } from '../apis/mysqlAPI.js'

export const blogStore = defineStore('blog', () => {
  // 定义数据(state)
  const blogList = ref([
    {
      title: "疯狂的冒险家格尔曼.斯帕罗暗杀“疾病少女”！",
      body: "这两天大家都在关注msi的赛事，太多人忽略了LPL赛区其实也有一些热度很高的事情，比如这赛季转会期被最多人讨论的就是WBG战队，因为他们缺少教练，而最近他们来了新教练，本以为事情就此结束，结果没想到最近又有其他事情引起热议。因为最近有爆料称新教练来了也没用，WBG的表现依然很糟糕，训练赛打按在地板上捶，而且上单theshy的表现最差，本来大家还在反驳的，结果Theshy自己直播的时候证实了这一点，表示训练赛确实表现不好。",
      id: 1,
      tags: ["vue3", "vue2", "react"],
    },
    {
      title: "贝克朗大使被暗杀，极光会宣布对此事负责！",
      body: "极光会",
      id: 2,
      tags: ["rap", "唱", "跳"],
    },
    {
      title: "鲁恩国王议会的成员！",
      body: "卷毛狒狒~",
      id: 3,
      tags: ["谷物法案", "黑皇帝", "独裁"],
    },
    {
      id: 5493,
      title: "阿蒙",
      body: "错误教你学vue~~~~~~~~",
      tags: ["vue2", "vue3", "rap"],
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