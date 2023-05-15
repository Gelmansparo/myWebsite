import axios from "axios";
import { ref } from "vue";


const getPost = (id) => {

  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const { data: res } = await axios("http://localhost:3000/posts/" + id);
      // console.log(res);
      post.value = res;
    } catch (error) {
      error.value = error.message
    }
  }

  return { post, load, error }

}

export default getPost