class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = false;
        nums.forEach((num)=>{
            if(nums.indexOf(num, nums.indexOf(num) + 1)!== -1 && !result){
                 result = true
            }
        })

        return result;
    }
}
