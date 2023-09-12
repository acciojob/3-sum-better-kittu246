function threeSum(arr, target) {
// write your code here
	let n = arr.length;
    let len = 3;
    let minDiff=Number.MAX_VALUE;
    let ans = 0;
    for(let i=0;i<=n-len;i++){
      let sum=0;
      let halfAns= arr.slice(i,i+len);
      for(let j of halfAns){
        sum = sum +j;
      }
      
      let diff= Math.abs(sum -target);
      if(diff < minDiff ){
        minDiff = diff;
        ans = sum;
      }

      
    }

   return(ans);
  
}

module.exports = threeSum;
