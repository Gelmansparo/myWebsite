// import mysql from 'mysql2'
var mysql = require('mysql2')

const connection = mysql.createPool({
  host: 'rm-cn-zxu387853000mqdo.rwlb.rds.aliyuncs.com',
  user: 'yaoyuting',
  password: 'Yaoyuting521',
  database: 'my_blog'
});

export default connection.promise()

/* const getBlogListAPI = () => {
  connection.query(
    'SELECT * FROM bloglist',
    (err, results) => {
      // 查询失败 则 退出并打印 失败消息
      if (err) return console.log(err.message);
      // 查询成功 返回结果
      console.log(results)
    })
}


export { getBlogListAPI } */