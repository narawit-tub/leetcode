

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	history := make(map[rune]int)
	t_rune := []rune(t)
	s_rune := []rune(s)

	// constructing history log
	for index, char := range s_rune {
		history[char]++

		history[t_rune[index]]--
	}

	// search != 0 key, which mean both s & t not same
	for _, value := range history {
		if value != 0 {
			return false
		}
	}

	return true
}