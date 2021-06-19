const fs = require('fs')

// fs.readFile('./foo.txt', {encoding: "utf-8"}, (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

fs.writeFile('./foo.txt', "aaa", {flag: 'a+'}, err => {
  console.log(err)
})

