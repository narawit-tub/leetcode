Idea is to have window (array[left:right]) valid for given time to find the problem

Like given array nums = [3, 2, 1, 3, 1, 1] and k = 5, task is find subArray that sum to 5

When we have [3, 2, 1], this window is invalid since it's more than 5 already, we can not make it valid by adding more value from the right
so we only can remove value from left of window.

Summary: Keep moving right or adding more element to make window valid,
Keep removing element from left of window to make it valid if adding more element can't help

```text
function fn(arr):
    left = 0
    for (int right = 0; right < arr.length; right++):
        Do some logic to "add" element at arr[right] to window

        while WINDOW_IS_INVALID:
            Do some logic to "remove" element at arr[left] from window
            left++

        Do some logic to update the answer
```