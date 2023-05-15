import axios from "axios";
import { ref } from "vue";


const getPosts = () => {

  const posts = ref([]);

  const load = async () => {
    try {
      const { data: res } = await axios("http://localhost:3000/posts");
      // console.log(res);
      posts.value = res;
    } catch (err) {
      console.log(err);
    }
  }

  return { posts, load }

  /*   const load = async () => {
    try {
      const { data: res } = await axios("http://localhost:3000/posts");
      // console.log(res);
      posts.value = res;
    } catch (err) {
      console.log(err);
    }
  }
  load() */
}

export default getPosts