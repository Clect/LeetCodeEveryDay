function findOcurrences(text: string, first: string, second: string): string[] {
    let ret:string[] = [];
    let textArray = text.split(" ");
    textArray.forEach((x, index) => {
        if(x == first) {
            if(textArray[index + 1] == second && !!textArray[index + 2]) {
                ret.push(textArray[index + 2])
            } else {
                return
            }
        } else {
            return
        }
    })


    return ret;
};
