function palindrome(str) {
  //creating regex to remove non-alphanumeric characters
  let reg = /[^A-Za-z0-9]+/g;
  str = str.replaceAll(reg,'');
  str  =  str.toLowerCase();
  //sending str to the nether realm(array)
  let arr = str.split('');
  //array for the reversed string
  let rArr = [];
    for(let i=0;i<arr.length;i++){
      rArr.unshift(arr[i]);
    }
    //turning arrays back into strings and testing
  rArr = rArr.join('');
  arr = arr.join('');
  console.log(rArr);
  console.log(arr);
  //heres the real magic when we find out 
  if(arr == rArr){
    return true;
  }else{
    return false;
  }
}

console.log(palindrome("_$%%Rye"));