// merge two sorted array into a single sorted array 

/*Solution steps

*/
/*function mergeSortedArray(a, b) {
	for (var i = 0; i < b.length; i++) {
		a.push(b[i]);
	}
	for (i = 0; i < a.length; i++) {
		for(var j = i+1; j < a.length; j++  )
		{
			if(a[i] > a[j]) {
				var temp = a[i];
				a[i] = a[j];
				a[j] = temp;
			}
		}

	}
	return a;
}*/

function mergeSortedArray(a, b) {
	var sorted = [],
		indexA = 0,
		indexB = 0;

	while (indexA < a.length && indexB < b.length) {
		if (sortFn(a[indexA], b[indexB]) > 0) {
			sorted.push(b[indexB++]);
		} else {
			sorted.push(a[indexA++])
		}
	}

	/* A> Now the above while loop will stop its execution, as soon as one of the array's all elements have been pushed to the new array ( i.e. sorted ). Leaving the case if the other condition of the while loop still is valid (e.g. indexB is still < b.length ). 

	B> This will be the case for that array which will have the highest numerical value. 

	C> So, to include that terminal case into the final sorted array, I have to check this same condition again after the while loop complete its runs.

	D) And concat that particular array's rest of the values sliced from that index till the end of values.
	*/

	if (indexB < b.length) {
		sorted = sorted.concat(b.slice(indexB));
	} else {
		sorted = sorted.concat(a.slice(indexA));
	}

	return sorted;

}


function sortFn(a, b) {
	return a - b;
}



console.log(mergeSortedArray([1, 2, 3, 5, 8], [4, 6, 7, 9]));