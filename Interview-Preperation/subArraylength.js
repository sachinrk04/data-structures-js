const arr1 = [1,2,3,2,1]

const arr2 = [3,2,1,4]

var findLength = function(nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;
    let dp = new Array(n + 1);

    for (let i = 0; i <= n; i++) {
        dp[i]=new Array(m+1);
        for (let j = 0; j <= m; j++)
            dp[i][j] = 0;
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            if (nums1[i] == nums2[j])
                dp[j][i] = dp[j + 1][i + 1] + 1;
        }
    }
    let maxm = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            maxm = Math.max(maxm, dp[i][j]);
        }
    }

    return maxm;
};

console.log("findLength---->", findLength(arr1, arr2))