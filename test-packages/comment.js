function createCommentBlock(inputString) {
    const lines = inputString.split('\n');
    let modifiedString = "/*\n";
    
    for (const line of lines) {
        modifiedString += " * " + line + "\n";
    }
    
    modifiedString += " */";
    
    return modifiedString;
}

module.exports = createCommentBlock;
