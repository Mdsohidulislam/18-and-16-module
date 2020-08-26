////variable single value rakhbe 
var numS=[11,23,21,11,12,43,42,66,75,9]
function numbers(nums){
    var larger=nums[0];
    for(var i=0; i<nums.length; i++){
        var element=nums[i];
        if(element > larger){
            larger =element
        }
    }
    return larger;
}
var largestNumber=numbers(numS)
console.log(largestNumber);

