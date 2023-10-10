class BubbleSort {
  sortUsingForLoop(arr) {
    for (let i = 0; i < arr.length; i++) {
      let flag = false;
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          flag = true;
        }
      }
      if (!flag) {
        break;
      }
    }
  }

  sortUsingDoWhile(arr) {
    let swaped;
    do {
      swaped = false;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
          let temp = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = temp;
          swaped = true;
        }
      }
    } while (swaped);
  }
}

module.exports = new BubbleSort();


//The time complexity of the Bubble Sort algorithm is O(n^2) in the worst-case and average-case scenarios, 
// and O(n) in the best -case scenario when the input array is already sorted.Here's a breakdown of the time complexity:

// Worst-case: O(n^2) - This occurs when the input array is in reverse order, and Bubble Sort needs to perform a large number of swaps to sort the array.

// Average-case: O(n^2) - On average, Bubble Sort will perform a quadratic number of comparisons and swaps.

// Best-case: O(n) - In the best-case scenario, when the input array is already sorted, Bubble Sort will still need to make n-1 passes through the array to confirm that it's sorted, but it won't perform any swaps.