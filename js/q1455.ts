function isPrefixOfWord(sentence: string, searchWord: string): number {
    let ret = -1;

    let sArray = sentence.split(" ");

    for(let i = 0;i < sArray.length;i++) {
        if(sArray[i].indexOf(searchWord) == 0) {
            ret = i + 1
            break;
        }
    }

    return ret;
}

let c1 = isPrefixOfWord("i love eating burger", "burg");
let c2 = isPrefixOfWord("this problem is an easy problem", "pro");
let c3 = isPrefixOfWord("i am tired", "you");

console.log(c1, c2, c3)