function digitSum(s: string, k: number): string {
  let ret = "";
  let temp:number[] = [];

  if(s.length <= k) {
    return s;
  }

  for(let i = 0;i < s.length;i++) {
    temp.push(+s[i]);
    if(i % k == k - 1) {
      ret += temp.reduce((total, cur) => total + cur, 0);
      temp = [];
    }
  }

  if(temp.length > 0) {
    ret += temp.reduce((total, cur) => total + cur, 0);
  }

  if(ret.length > k) {
    return digitSum(ret, k)
  } else {
    return ret;
  }
}
