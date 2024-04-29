const path=require('path')
console.log(path.dirname(__filename)) //directory name eg:C:\Users\vinod\Desktop\NODE PRACTICE
console.log(path.basename(__filename)) //file basename eg:path.js
console.log(path.extname(__filename)) //extension eg:.js
console.log(path.parse(__filename)) //gives complete object
/*eg:
{
  root: 'C:\\',
  dir: 'C:\\Users\\vinod\\Desktop\\NODE PRACTICE',
  base: 'path.js',
  ext: '.js',
  name: 'path'
} */