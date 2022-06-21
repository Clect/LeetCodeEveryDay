/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var licenseKeyFormatting = function(s, k) {
    let ret = "";
    let largeS = "";
    for(let i = 0;i < s.length;i++) {
        if(s[i] == '-') {
            continue;
        } else {
            largeS += s[i].toUpperCase();
        }
    }
    
    let first = largeS.length % k;

    for(let i = 0;i < largeS.length;i++) {
        ret += largeS[i];

        if(i == largeS.length - 1) {
            break;
        } else if((i + 1) == first) {
            ret += '-';
        } else if((i + 1) % k == first) {
            ret += '-';
        }
    }

    return ret;
};

let cc = licenseKeyFormatting("2-5g-3-J", 2)
console.log(cc)
