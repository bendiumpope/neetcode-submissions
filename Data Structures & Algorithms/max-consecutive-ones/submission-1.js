class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let maxCount = 0;

        nums.forEach((num) => {
           if(num === 1){
            count +=1;
           }else{
            if(count > maxCount){
                maxCount = count
            }
            count = 0;
           } 
        })

        return maxCount > count ? maxCount : count;
    }
}
