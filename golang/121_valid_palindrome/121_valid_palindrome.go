import (
	"fmt"
	"regexp"
	"strings"
)

func isPalindrome(s string) bool {
	// sanitizing string
	reg := regexp.MustCompile("[^a-zA-Z0-9]+")
	sanitizedStr := strings.ToLower(reg.ReplaceAllString(s, ""))

	// check
	sizeOfStr := len(sanitizedStr)
	for i := 0; i < sizeOfStr/2; i++ {
		if sanitizedStr[i] != sanitizedStr[sizeOfStr-1-i] {
			return false
		}
	}

	return true
}