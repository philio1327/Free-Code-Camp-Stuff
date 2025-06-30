function convertMarkdown() {

    let inputText = markdownInput.value;
    const lines = inputText.split("\n");
    let resultLines = [];
    let content = "";

    const headingRegex = /^\s*(#{1,3})\s*(.*)/; //converts "# title 1" to <h1>title 1</h1> and "## title 2" to <h2>title 2</h2> 
    const boldRegex = /(\*\*|__)(.+?)\1/g; // converts "__bold text__" or "**bold text**" to <strong>bold text</strong> including multiple occurences on one line
    const italicRegex = /(\*|_)(.+?)\1/g; // converts "_italics_" or "*italics*" to <em>italics</em> including multiple occurences on one line
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g; // converts ![alt-text](image-source) to <img src="image-source" alt="alt-text" >
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; // converts [link-text](URL) to <a href="URL">link text</a>
    const blockquoteRegex = /^\s*>\s?(.*)$/;

    for (let line of lines){
        const headingMatch = line.match(headingRegex);
        if (headingMatch){
            const level = headingMatch[1].length;
            content = headingMatch[2].trim();
            content = `<h${level}>${content}</h${level}>`;
            
        } else if (blockquoteRegex.test(line)){
            content = line.match(blockquoteRegex)[1];
            content = `<blockquote>${content}</blockquote>`;

        } else {
            content = line;
        }
        content = content.replace(boldRegex, `<strong>$2</strong>`);
        content = content.replace(italicRegex, `<em>$2</em>`);
        content = content.replace(imageRegex, `<img alt="$1" src="$2" >`);
        content = content.replace(linkRegex, `<a href="$2">$1</a>`);
        resultLines.push(content);
        
    }
    return resultLines.join("");
}

const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");
markdownInput.addEventListener("input", () => {
    const result = convertMarkdown();
    htmlOutput.textContent = result; // Use innerHTML to render tags, not innerText
    preview.innerHTML = result;
});


