const arr1 = [3];
const arr2 = [-2,-1];

var findMedianSortedArrays = function(nums1, nums2) {
    const nums3 = nums1.concat(nums2);
    const len = nums3.length;
    
    const arrSort = nums3.sort((a,b) => a-b);
    const mid = Math.ceil(len / 2);
    const median = len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];

    return median
};

console.log(findMedianSortedArrays(arr1, arr2))