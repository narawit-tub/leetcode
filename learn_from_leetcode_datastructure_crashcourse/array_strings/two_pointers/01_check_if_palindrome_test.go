package arraystrings

import (
	"fmt"
	"testing"
)

func TestCheckIfPalindrome(t *testing.T) {
	var cases = []struct {
		name        string
		inputStr    string
		isPalindrom bool
	}{
		{name: "case A", inputStr: "", isPalindrom: true},
		{name: "case B", inputStr: "abcdcba", isPalindrom: true},
		{name: "case C", inputStr: "abcde", isPalindrom: false},
		{name: "case D", inputStr: "ab_ba", isPalindrom: true},
		{name: "case E", inputStr: "aba", isPalindrom: true},
	}

	for _, test := range cases {
		t.Run(fmt.Sprintf("name: %s --> input Str: %s gets isPalindrome %v", test.name, test.inputStr, test.isPalindrom), func(t *testing.T) {
			got := checkIfPalindrome(test.inputStr)
			if got != test.isPalindrom {
				t.Errorf("got %v, want %v", got, test.isPalindrom)
			}
		})
	}
}

func checkIfPalindrome(str string) bool {
	left := 0
	right := len(str) - 1

	for left < right {
		if str[left] != str[right] {
			return false
		}
		left++
		right--
	}

	return true
}
