class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let k = 1;
        let replace = [];

        for(let i = 0; i < arr.length; i++){
            if(k !== arr.length){
                //let slc = arr.slice(k)
                //let max = Math.max(...slc)
                //replace.push(max)

                replace.push(Math.max(...arr.slice(k)))
            }
            k++
        }
        replace.push(-1)

        return replace
    }
}
