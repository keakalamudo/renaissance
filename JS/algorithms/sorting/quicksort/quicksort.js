/**
 * This is a Quicksort implementation in JavaScript.
 * Quicksort is a divide and conquer algorithm. It first divides a large array into two smaller sub arrays:
 * the high elements and the low elements. It can then recursively sort the sub array.
 *
 */

/**
 * Details:
 *
 * Class        = Sorting Algorithm
 * Worst Case   = O(n^2)
 * Average Case = O(n log n)
 * Best Case    = O(n log n)
 */

/**
 * Steps:
 * -> Pick a pivot in the array.
 * -> Start pointers at left and right of the array.
 * -> Reorder pointers to the left or right of the pivot depending on if the value
 *    of the pointer is larger or smaller than the pivot.
 *
 */

/**
 * Swaps two values in an array.
 * @param {Array} items The array containing the items.
 * @param {int} firstIndex Index of first item to swap.
 * @param {int} secondIndex Index of second item to swap.
 * @return {void}
 */


function swap (items, firstindex, secondindex){
    var temp = items[firstindex];
    items[firstindex] = items[secondindex];
    items[secondindex] = temp;

}

function partition(items, left, right){
    var pivot = items[Math.floor((right+left)/2)],
        i = left,
        j = right

    while(i<=j){
        while(items[i] < pivot){
            i++;
        }
        while(items[i] > pivot){
            j--;
        }
        if(i<=j){
            swap(items,i,j);
            i++;
            j--;
        }
    }
    return i;
}

function quicksort(items, left, right){
    var index;
    

}