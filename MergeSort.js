function MergeSort(arr, s, e) {
  if (s < e) {
    const m = Math.floor(s + (e - s) / 2);
    MergeSort(arr, s, m);
    MergeSort(arr, m + 1, e);
    Merge(arr, s, e);
  }
}

function Merge(arr, s, e) {
  let m = Math.floor(s + (e - s) / 2)+1;
  const L=arr.slice(s,m)
  const R=arr.slice(m,e+1)
  let j=0
  let i=0
  for (let k = s; k < e+1; k++) {
    if(L[i]<R[j] || j==R.length){
      arr[k]=L[i]
      i++;
    }
    else {
      arr[k]=R[j];
      j++;
    }
  }
}
const koko=[2,1,5,4,7,6,3,88,3]
MergeSort(koko,0,koko.length-1)
console.log(koko)