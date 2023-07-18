package twosum

func TwoSum(nums []int, target int) []int {
	m := make(map[int]int)

	// loop through element
	for i, num := range nums {
		// if the result of target - nums[i] found in hashMap, then return [i, hashMap[target - nums[i]]]
		diff := target - num
		if val, ok := m[diff]; ok {
			return []int{i, val}
		} else {
			m[num] = i
		}

	}
	return nil
}
