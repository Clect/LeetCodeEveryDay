var subsets = function(nums) {
    const res = []
    const len = nums.length
    if (len) {
        function groupArry (nums, k, c) {
            if (k === 0) {
                res.push(c)
                return
            }
            const len = nums.length
            for (let i = 0; i <len; i++) {
                const total = [...c]
                total.push(nums[i])
                const arr = nums.slice(i + 1)
                groupArry(arr, k - 1, total)
            }
        }
        for (let i = 0; i <= len; i++) {
            groupArry(nums, i, [])
        }
    }
    return res
};




// 排列组合，产出一个树
// nums:[1,2,3]; current:[], total:[]
var api_game = (nums, current, total) => {
    let ccRet = [];
    nums.forEach((x, x_index) => {
        const res = [...current, x]
        const afterFilterX = nums.filter((y, y_index) => y_index !== x_index);
        if(afterFilterX.length) {
            const newTotal = total.concat(res);
            ccRet.push(api_game(afterFilterX, res, newTotal));
        } else {
            ccRet.push(res)
        }
        
    })

    return ccRet;
}

let cc = subsets([1,2,3])
console.log(cc, 'last')
