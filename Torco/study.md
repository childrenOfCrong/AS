### 삽입정렬

```
var insertionSort = function(array){
    var i = 1, j, temp;
    for( i; i < array.length; i++ ) {
        temp = array[i];
        for( j = i - 1; j >= 0 && temp < array[j]; j-- ) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }
    return array;
}
```

### 합병정렬
```
var mergeSort = function(arr) {
	if( arr.length < 2 ) return arr;
	var pivot = Math.floor( arr.length / 2 );
	var left = arr.slice(0, pivot);
	var right = arr.slice(pivot, arr.length);
	return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
	var result = [];
	while( left.length && right.length ) {
		if( left[0] <= right[0] ) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	while( left.length ) result.push(left.shift());
	while( right.length ) result.push(right.shift());
	return result;
};
```

### [계수정렬](https://gist.github.com/cohily12/474735938ff53ecb6c64a74152c4de61)

### [기수정렬](https://gist.github.com/cohily12/c98ea31b704cf6d646d7d4a8031805ef)
