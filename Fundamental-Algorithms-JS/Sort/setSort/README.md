# Set Sort

It’s really really fast, and it’s far quicker than the quicksort algorithm, which is considered as the fastest sorting algorithm in practice.

However, the simplest version of it only works with integers, and I’ve to know the first and the last element from that set and also every element is unique

1. First Pass
First we have an unsorted array, but we know the minimum and maximum of the set.

On the first pass initialize an empty array (lets call it newArray ) with as many elements, as they are between the first and the last element of the unsorted array – for a set between 1 and 1000 – that will be an array with 1000 elements – each of which will be a zero in the beginning.

Than loop trough the the given unsorted array and for every element in that unsorted – put a 1 on it’s index position.

That is, if the unsorted array is [ 3, 2, 5], for the newArr[3] will have 1 as its element, and newArr[2] is 1 and newArr[5] is equal to 1

Now from the newArray just return those elements whose value is 1.