class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let freq = {};

        nums.forEach((num)=>{
            if(!freq[num]){
               freq[num] = 1 
            }else{
                freq[num] += 1
            }
        })

        let sortedValue = Object.values(freq).sort((a, b) => b - a)
        let newValue = sortedValue.slice(0,k);
        
        let result = []
        Object.entries(freq).forEach(([key, value])=>{
            if(newValue.includes(value)){
                result.push(+key)
            }
        })
        return result;
    }
}
