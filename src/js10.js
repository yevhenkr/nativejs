//promise

// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// fetch(url, callback) => {
//   //........
//   callback(data)
// }

// fetch("https://libruary.com/authors", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//     fetch("https://libruary.com/authors/23", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//         fetch("https://libruary.com/authors/23/books", (err, data) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(data);
//             fetch("https://libruary.com/authors/23/books/45", (err, data) => {
//               if (err) {
//                 console.log(err);
//               } else {
//                 console.log(data);
//                 fetch("https://libruary.com/authors/23/books/45/256", (err, data) => {
//                   if (err) {
//                     console.log(err);
//                   } else {
//                     console.log(data);
//                   }
//                 });
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

// fetch("https://libruary.com/authors")
//   .then((data) => {
//     return fetch("https://libruary.com/authors/23")
//   })
//   .then((data) => {
//     return fetch("https://libruary.com/authors/23/books")
//   })
//   .then((data) => {
//     return fetch("https://libruary.com/authors/23/books/45")
//   })
//   .then((data) => {
//     return fetch("https://libruary.com/authors/23/books/45/256")
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// const fs = require('fs')

// const file = {
//   getFile() {
//     return new Promise((res, rej) => {
//       fs.readFile("./index.js", (err, data) => {
//         if (err) {
//           rej(err)
//         } else {
//           res(data)
//       })
//     })
//   }
// }

// const server = {
//   getData() {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         res("Some data");
//         // rej("Some error");
//       }, 1000);
//     });
//   },
// };

// server
//   .getData()
//   .then((data) => {
//     console.log("then1");
//     return "from then1";
//   })
//   .then((data) => {
//     console.log("then2", data);
//     throw new Error("some error then2");
//   })
//   // .then(() => {
//   //   console.log("then3");
//   // })
//   .catch((err) => {
//     console.log("catch1", err);
//     return "from catch1";
//   })
//   .finally((data) => {
//     console.log("finally1", data);
//     throw new Error("some error finally1");
//     // return "from finally1";
//   })
//   .then((data) => {
//     console.log("then4", data);
//   })
//   .finally(() => {
//     console.log("finally2");
//   });
// .catch((err) => {
//   console.log("catch2", err);
// });

// promise.catch((err) => {
//   console.log(err);
// });

// promise.finally(() => {
//   console.log("finally");
// })

Promise.reject("reject1")
  .catch((t) => t + "catch1")
  .catch((t) => t + "catch2")
  .then((t) => t + "then1")
  .finally((t) => t + "finally")
  .then((t) => console.log(t));
