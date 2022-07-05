function splitArraySameAverage(nums: number[]): boolean {
    let ret = false;
    const length = nums.length;
    const middlleIndex = Math.floor(length / 2);
    const sortedNum = nums.sort((a, b) => a - b);
    const sum = nums.reduce((total, cur) => total + cur, 0);
    const avg = sum / nums.length;

    if(sortedNum.includes(avg)) {
        return true;
    }

    if(length % 2 === 1) {
        return sortedNum[middlleIndex] == avg;
    } else {
        const smaller = sortedNum.filter(x => x < avg);
        const bigger = sortedNum.filter(x => x > avg);
        const sLength = smaller.length;
        const bLength = bigger.length;
        const _avg = smaller.concat(bigger).reduce((total, cur) => total + cur, 0) / (sLength + bLength)
        return avg === _avg
    }

    return ret;
};



//  [2,4,6,8,10] [4, 6, 8] [2, 10]
//  48 [1, 95] [46, 47, 49, 50]
// [1, 3], [1,1,1, 3,3,3]


//  [1, 9, 20] [6, 11, 13]
