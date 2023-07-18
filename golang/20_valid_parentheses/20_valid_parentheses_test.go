package validparentheses

import (
	"fmt"
	"reflect"
	"testing"
)

func TestValidParentheses(t *testing.T) {
	testCases := []struct {
		s        string
		expected bool
	}{
		{"()", true},
		{"()[]{}", true},
		{"(]", false},
		// Add more test cases here
	}

	for _, tc := range testCases {
		t.Run(fmt.Sprintf("s=%s,target=%v", tc.s, tc.expected), func(t *testing.T) {
			result := IsValidParentheses(tc.s)

			if !reflect.DeepEqual(result, tc.expected) {
				t.Errorf("Unexpected result: got %v, want %v", result, tc.expected)
			}
		})
	}
}
