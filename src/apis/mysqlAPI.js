import connection from '../mysql/index.js'

// 获取完成的列表
const getBlogListAPI = async (req, res) => {
  const [result] = await connection.query('SELECT * FROM bloglist')
  // console.log(result);
  return result
}


export { getBlogListAPI }
// const res = await getBlogListAPI()
// console.log(res);
// getBlogListAPI()
