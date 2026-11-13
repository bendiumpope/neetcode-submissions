class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let alreadyChecked = {}
        let result = []

        strs.forEach((str)=> {
            let sortedStr = str.split("").sort().join("");
            if(!alreadyChecked.hasOwnProperty(sortedStr)){
            alreadyChecked[sortedStr] = [];
            }
            alreadyChecked[sortedStr].push(str)
        });
        Object.values(alreadyChecked).forEach((value)=>{
            result.push(value)
        })
        return result;
    }
}
