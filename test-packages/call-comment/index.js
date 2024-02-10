// index.js
const createCommentBlock = require('code-commenter');

const inputString = "This is a sample\n string.";

const modifiedComment = createCommentBlock(inputString);

console.log(modifiedComment);