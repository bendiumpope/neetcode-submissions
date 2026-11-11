class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sortedS = s.split("").sort();
        let sortedT = t.split("").sort();
if(sortedS.length !== sortedT.length){
    return false
}

for(let index =0; index<sortedS.length; index++){
    if(sortedT[index] !== sortedS[index]){
                return false
            }
}

        return true
    }
}
