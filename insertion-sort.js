'use strict'
/* Insertion sort algorithm using javascript with function */

let list = [ 12, 15, 9, 5, 7 ]

function Insertion_Sort(Arr) {
  if(Arr.length === 1) {
    console.log('Array is already sorted')
    return Arr
  }

  for(let i = 0; i < Arr.length ; i ++ ) {

    if(Arr[i] > Arr [i + 1]){
      let key = Arr[i]
      let j = i - 1

      while(j >= 0 && key < Arr[j]) {
        
        Arr[j] = Arr[j + 1]
        j = j -1;
      }
      Arr[j + 1] = key
    }
  }
  return Arr;
}


console.log(Insertion_Sort(list))

