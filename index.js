function createCommentBlock(inputString) {
    const lines = inputString.split('\n');
    let modifiedString = "/* ";
    
    for (const line of lines) {
        modifiedString += " * " + line + "\n";
    }

    modifiedString += " */";
    
    return modifiedString;
}

module.exports = createCommentBlock;
