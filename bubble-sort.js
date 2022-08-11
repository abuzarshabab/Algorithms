/**
 * Bubble sort algorithm, Push the biggest elements to the right after every comparison between two consecutive elements upto n-1 times.
 *
 */
let arrayRandom = [12, 15, 9, 5, 7];
let arrayGeek = [5, 1, 4, 2, 3];
function Bubble_Sort(list) {
  const SIZE_OF_LIST = list.length

  let NUMBER_OF_ITERATION = 0;
  let NUMBER_OF_SWAP = 0

  if (SIZE_OF_LIST < 1) {
    console.log("List is already sorted ");
  }

  /** time complexity will be o(n^2) */
  /* And thee function will follow f(n) = (n-1)(n)/2 */
  for (i = 1; i < SIZE_OF_LIST ; i++) {
    for (j = 0 ; j < SIZE_OF_LIST - i ; j++) {
      /** Compare if first element is bigger then swap each other */
      if (list[j] > list[j + 1]) {

        let temp = list[j]  /* store bigger to temp for swapping*/
        list[j] = list[j+1];
        list[j+1] = temp;
        NUMBER_OF_SWAP++
      }
      NUMBER_OF_ITERATION++
      console.log(list);
    }
    console.log("First n-i iteration done", NUMBER_OF_ITERATION);
  }
  console.log("Number of iteration would be", (((SIZE_OF_LIST - 1) * (SIZE_OF_LIST )) / 2 ) )
  return list;
}
Bubble_Sort(arrayGeek)
