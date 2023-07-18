package validparentheses

func IsValidParentheses(s string) bool {
	var stack []rune
	pairOfParenTheses := map[rune]rune{
		'(': ')',
		'[': ']',
		'{': '}',
	}

	for _, char := range s {
		if len(stack) == 0 {
			stack = append(stack, char)
			continue
		}

		// if HEAD of stack == new char, pop log stack
		topElementIndex := len(stack) - 1
		if pairOfParenTheses[stack[topElementIndex]] == char {
			stack = stack[:topElementIndex]
		} else {
			stack = append(stack, char)
		}
	}

	return len(stack) == 0
}
