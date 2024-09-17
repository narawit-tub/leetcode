package twopointers

import (
	"fmt"
	"testing"
)

func TestCheckTargetExist(t *testing.T) {
	var cases = []struct {
		name          string
		nums          []int
		target        int
		expectedFound bool
	}{
		{name: "case A", nums: []int{
			1, 2, 4, 6, 8, 9, 14, 15,
		}, target: 13, expectedFound: true,
		}}

	for _, test := range cases {
		t.Run(fmt.Sprintf("name: %s", test.name), func(t *testing.T) {
			got := checkTargetExist(test.nums, test.target)
			if got != test.expectedFound {
				t.Errorf("got %v, want %v", got, test.expectedFound)
			}
		})
	}
}

func checkTargetExist(nums []int, target int) bool {
	left := 0
	right := len(nums) - 1

	for left < right {
		if nums[right]-nums[left] > target {
			right--
			continue
		}

		if nums[right]-nums[left] < target {
			left++
			continue
		}

		if nums[right]-nums[left] == target {
			return true
		}
	}

	return false
}
