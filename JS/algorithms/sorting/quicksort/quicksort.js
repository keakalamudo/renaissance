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
    var pivot = items[Math.floor((right+left)/2)], //This is the middle value
        i = left, // i starts from the left and goes right to pivot index.
        j = right // j starts from the right and goes left to pivot index

    //While the two indices do not match.
    while(i<=j){
        //if the elememt is less than the pivot, move right
        while(items[i] < pivot){
            i++;
        }
        //if the element is greater than the pivot, move left
        while(items[i] > pivot){
            j--;
        }
        //if the two indices still do not match, swap them
        if(i<=j){
            swap(items,i,j);
            //change indices to continue the loop
            i++;
            j--;
        }
    }
    return i;
}
/**
 * Quicksort implementation in JavaScript. The array will be sorted in place.
 * @param {Array} items An array of items to sort.
 * @return {Array} The sorted array.
 */

function quicksort(items, left, right){
    var index;

    //Test -- Do not sort an array with zero or one element.
    if(items.length > 1){

        // fix left and right values - might not be provided
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        //split up the entire array.
        index = partition(items, left, right);

        //if the index returned.
        if (left < index -  1 ){
            quicksort(items, left, index -1);
        }
        if (index < right){
            quicksort(items, index, right);
        }

    }
    return items;
}
