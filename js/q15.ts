function threeSum(nums: number[]): number[][] {
    const res: number[][] = [];
    if (nums.length < 3) return res;
    nums.sort((a, b) => a - b);
    // 查找
    for (let i = 0; i < nums.length - 2; i++) {
        //  避免重复元素
        if (nums[i] == nums[i - 1]) continue;

        const target = -nums[i];
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            //  避免重复元素(为什么要j > i+1,因为下标i跟j可以相同)
            if (j > i + 1 && nums[j] == nums[j - 1]){
                 j++;continue;
            };
            if (nums[k] == nums[k + 1]){
                 k--;continue;
            };
            // 查找
            if (nums[j] + nums[k] == target) {
                res.push([nums[i], nums[j], nums[k]]);
                j++; k--;
            } else if (nums[j] + nums[k] < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return res;
};


const getOrdinalArray = (n:number):number[] => {
    let ret = new Array(n).fill(n);
    return ret.map((_,index) => index);
}


// 排列组合-有顺序的
const getACwithOrder = (n: number[], ret: number[], deep: number, totalRet: number[][]) => {
    let tempRet:any[] = [];
    if(deep == 0) {
        totalRet.push(ret)
    } else {
        n.forEach((x, x_index) => {
            const afterFilterArray = n.filter((_, y_index) => y_index != x_index)
            getACwithOrder(afterFilterArray, [...ret, x], deep - 1, totalRet)
        })
    }

    return tempRet
}
// 排列组合-无顺序的
const getACwithoutOrder = (n: number[], ret: number[], deep: number, totalRet: number[][]) => {
    let tempRet:any[] = [];
    if(deep == 0) {
        totalRet.push(ret)
    } else {
        n.forEach((x, x_index) => {
            const afterFilterArray = n.filter((y, y_index) => {
                // const notSame = y_index != x_index
                const biggerThanLast = y > x;
                return biggerThanLast;
            })
            getACwithoutOrder(afterFilterArray, [...ret, x], deep - 1, totalRet)
        })
    }

    return tempRet
}
// 我的排列组合
const DEEP = 3;
const realRet = [];
getACwithOrder(getOrdinalArray(10), [], DEEP, realRet)

let cc = threeSum([-1,0,1,2,-1,-4])
// -4 -1 -1 0 1 2
console.log(cc)