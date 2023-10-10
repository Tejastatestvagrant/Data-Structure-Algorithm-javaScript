class SelectionSort {

    sortUsingForLoop(arr) {
      
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
          let minIndex = i;

          // Find the index of the minimum element in the remaining unsorted part of the array
          for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
              minIndex = j;
            }
          }

          // Swap the found minimum element with the element at index i
          if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
          }
        }
    
  }


}

module.exports = new SelectionSort();

//The time complexity of the Bubble Sort algorithm is O(n^2) in the worst-case and average-case scenarios,
// and O(n) in the best -case scenario when the input array is already sorted.Here's a breakdown of the time complexity:

// Worst-case: O(n^2) - This occurs when the input array is in reverse order, and Bubble Sort needs to perform a large number of swaps to sort the array.

// Average-case: O(n^2) - On average, Bubble Sort will perform a quadratic number of comparisons and swaps.

// Best-case: O(n) - In the best-case scenario, when the input array is already sorted, Bubble Sort will still need to make n-1 passes through the array to confirm that it's sorted, but it won't perform any swaps.
