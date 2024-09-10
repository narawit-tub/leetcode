package arraystrings

import (
	"fmt"
	"testing"
)

func TestCheckIfPalindrome(t *testing.T) {
	var cases = []struct {
		inputStr    string
		isPalindrom bool
	}{
		{inputStr: "", isPalindrom: true},
		{inputStr: "abcdcba", isPalindrom: true},
		{inputStr: "abcde", isPalindrom: false},
		{inputStr: "ab_ba", isPalindrom: true},
		{inputStr: "aba", isPalindrom: true},
	}

	for _, test := range cases {
		t.Run(fmt.Sprintf("input Str: %s gets isPalindrome %v", test.inputStr, test.isPalindrom), func(t *testing.T) {
			got := checkIfPalindrome(test.inputStr)
			if got != test.isPalindrom {
				t.Errorf("got %v, want %v", got, test.isPalindrom)
			}
		})
	}
}

func checkIfPalindrome(str string) bool {
	left := 0
	right := len(str)

	for left < right {
		
	}
}
