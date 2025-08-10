function alphabetPosition(text) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const convertedText = [];

    for (let char of text.toLowerCase()){
        if (alpha.includes(char)){
            convertedText.push(alpha.indexOf(char) + 1)
        } 
    }

    return(convertedText.join(' '));
}

alphabetPosition("The sunset sets at twelve o' clock.")