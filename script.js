function threeSum(arr, target) {
// write your code here
	let n = arr.length;
  let minDiff=Number.MAX_VALUE;

  let sum =0;

  for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){

      for(let k=j+1;k<n;k++){
        
         sum = arr[i]+arr[j]+arr[k];
         //console.log(sum);

      let diff= Math.abs(sum-target);
      if(diff < minDiff ){
        minDiff = diff;
        ans = sum;
      }
      }
      

      

    }

    }

    return ans;
  
}

module.exports = threeSum;
