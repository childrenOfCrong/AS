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

