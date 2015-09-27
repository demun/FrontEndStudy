# Array.every


- 배열 안의 모든 요소가 해당 함수에 잘 test 되는지 pass 여부를 알 수 있다.




#### 문법

```javascript

 
arr.every(callback[, thisArg])
 
- callback -
Function to test for each element, taking three arguments
 
currentValue (required) :
The current element being processed in the array.
 
index (optional) :
The index of the current element being processed in the array.
 
array (optional) :
The array every was called upon.
 

- thisArg -
Optional. Value to use as this when executing callback.




#### 예

```javascript
 
function isBigEnough(element, index, array) {
return element >= 10;
}

[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true