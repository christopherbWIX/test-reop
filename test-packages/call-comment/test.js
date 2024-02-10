const myPackage = require('my-package');

// Call the function from the package
const modifiedComment = myPackage.createCommentBlock("Hello, \noriginal comment!");

// Log the modified comment
console.log(modifiedComment);