func productExceptSelf(nums []int) []int {
	leftProductSum := make([]int, len(nums))
	rightProductSum := make([]int, len(nums))
	answer := make([]int, len(nums))

	// Build left product sum
	for index, _ := range nums {
		if index == 0 {
			leftProductSum[index] = 1
		} else {
			previousElementIndex := index - 1
			leftProductSum[index] = leftProductSum[previousElementIndex] * nums[previousElementIndex]
		}
	}

	// Build right product sum
	for index := len(nums) - 1; index >= 0; index-- {
		if index == len(nums)-1 {
			rightProductSum[index] = 1
		} else {
			nextElementIndex := index + 1
			rightProductSum[index] = rightProductSum[nextElementIndex] * nums[nextElementIndex]
		}
	}

	// create result array
	for index := 0; index < len(nums); index++ {
		answer[index] = leftProductSum[index] * rightProductSum[index]
	}

	return answer
}

// unit test for this function
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
func TestProductExceptSelf(t *testing.T) {
	// test case 1
	nums := []int{1, 2, 3, 4}
	result := productExceptSelf(nums)
	if result != []int{24, 12, 8, 6} {
		t.Errorf("productExceptSelf(nums) = %v; want [24,12,8,6]", result)
	}
}