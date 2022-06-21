function threeSum(nums: number[]): number[][] {
    let ret =[];
    let temp = nums.sort((a,b) => a - b);

    let oArrar = getOrdinalArray(10);
    let realRet:any[] = []
    let pmp = getQA(oArrar, [], 3, realRet)
    return [temp];
};

const getOrdinalArray = (n:number):number[] => {
    let ret = new Array(n).fill(n);
    return ret.map((_,index) => index);
}


// 排列组合
const getQA = (n: number[], ret: number[], deep: number, totalRet: number[][]) => {
    let tempRet:any[] = [];
    if(deep == 0) {
        totalRet.push(ret)
    } else {
        n.forEach((x, x_index) => {
            const afterFilterArray = n.filter((_, y_index) => y_index != x_index)
            getQA(afterFilterArray, [...ret, x], deep - 1, totalRet)
        })
    }

    return tempRet
}

let cc = threeSum([-1,0,1,2,-1,-4])
// -4 -1 -1 0 1 2
console.log(cc)