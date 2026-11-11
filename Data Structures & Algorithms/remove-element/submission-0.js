class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let replace = []
        for(let i = 0; i < nums.length; i++){
            if(nums[i] !== val){
                replace.push(nums[i])
            }
        }
        for (let i = 0; i < replace.length; i++) {
            nums[i] = replace[i];
        }
        return replace.length

    }
}
