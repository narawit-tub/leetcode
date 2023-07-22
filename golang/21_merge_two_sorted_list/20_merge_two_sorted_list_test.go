/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

// before set new next, let traveler[A|B]Pointer = [A|B].next
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	if list1 == nil {
		return list2
	} else if list2 == nil {
		return list1
	}

	// set result node
	result := &ListNode{}
	resultTraveler := result

	// set traveler for A, B
	travelerA, travelerB := list1, list2

	// search until
	for travelerA != nil && travelerB != nil {
		// Choosing Node to be attached to result list
		if travelerA.Val < travelerB.Val {
			resultTraveler.Next = travelerA

			travelerA = travelerA.Next
		} else {
			resultTraveler.Next = travelerB

			travelerB = travelerB.Next
		}
		// move forward
		resultTraveler = resultTraveler.Next

		// preventing nil access
		if travelerA == nil {
			resultTraveler.Next = travelerB
		} else if travelerB == nil {
			resultTraveler.Next = travelerA
		}
	}

	// Cut the first node
	return result.Next
}