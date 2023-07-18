package twosum

import (
	"fmt"
	"reflect"
	"testing"
)

func TestTwoSum(t *testing.T) {
	testCases := []struct {
		nums     []int
		target   int
		expected []int
	}{
		{[]int{2, 7, 11, 15}, 9, []int{1, 0}},
		{[]int{3, 2, 4}, 6, []int{2, 1}},
		{[]int{3, 3}, 6, []int{1, 0}},
		// Add more test cases here
	}

	for _, tc := range testCases {
		t.Run(fmt.Sprintf("nums=%v,target=%d", tc.nums, tc.target), func(t *testing.T) {
			result := TwoSum(tc.nums, tc.target)

			if !reflect.DeepEqual(result, tc.expected) {
				t.Errorf("Unexpected result: got %v, want %v", result, tc.expected)
			}
		})
	}
}
