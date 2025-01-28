

```text
function fn(arr):
left = 0
right = arr.length - 1

    while left < right:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following:
            1. left++
            2. right--
            3. Both left++ and right--
```

1. Palindrom, move left & right as long as str[left]==str[right], unless it's not palindrom
2. Two sum for sorted array, for any given numbers[left] + numbers[right] !== target, move left is current sum is less than target, move right if current sum more than target

