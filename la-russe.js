'use strict'

/**
 *  The below code is demonstration of a'la russe algorithm.
 *  That is said you can multiply any number using the division and multiplication of 2.
 *  
 *  if m is even then (m*n) = (m/2) * (n*2)
 *  else (m*n) =  (m-1) + 1 * n =  ((m - 1) * n) + n = ((m - 1) / 2 * 2n ) + n 
 *    
 *  Repeat above steps until the value of m is zero (0) 
 */

let first = 11
let second = 12
let partialResult = 0
let remainder = 0

while(first !=  0) {

  if(first % 2 == 1) {
    remainder = 1 
  }
  
  /* for odd number implementation */
  if(remainder) {
    partialResult = second + partialResult
    second = second * 2
    first = (first - 1) / 2 
  } 

  /** Even number implementation */
  if(!remainder) {
    first = first / 2 
    second = second * 2
  } 

  remainder = 0   
}

console.log(partialResult)
partialResult = partialResult + second