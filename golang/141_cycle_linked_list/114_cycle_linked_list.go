/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func wheneverTheseRunnerNotFoundNil(slowRunner *ListNode, fastRunner *ListNode) bool {
	return slowRunner != nil && fastRunner != nil && fastRunner.Next != nil
}

func hasCycle(head *ListNode) bool {
	if head == nil {
		return false
	}

	// Setup Runner,
	// slow will take a step at a time
	// fast will take 2 steps at a time
	var slowRunner = head
	var fastRunner = head.Next

	for wheneverTheseRunnerNotFoundNil(slowRunner, fastRunner) {
		// when those slowRunner & fastRunner can be equal, mean it has cycle
		if slowRunner == fastRunner {
			return true
		}

		slowRunner = slowRunner.Next
		fastRunner = fastRunner.Next.Next
	}
	return false
}