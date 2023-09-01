/*
Exercise: Equivalent Binary Trees
1. Implement the Walk function.

2. Test the Walk function.

The function tree.New(k) constructs a randomly-structured (but always sorted) binary tree holding the values k, 2k, 3k, ..., 10k.

Create a new channel ch and kick off the walker:

go Walk(tree.New(1), ch)
Then read and print 10 values from the channel. It should be the numbers 1, 2, 3, ..., 10.

3. Implement the Same function using Walk to determine whether t1 and t2 store the same values.

4. Test the Same function.

Same(tree.New(1), tree.New(1)) should return true, and Same(tree.New(1), tree.New(2)) should return false.

The documentation for Tree can be found here.
*/
package main

import (
	"fmt"

	"golang.org/x/tour/tree"
)

func Walking(t *tree.Tree, ch chan int) {
	Walk(t, ch)
	close(ch)
}

// Walk walks the tree t sending all values
// from the tree to the channel ch.
func Walk(t *tree.Tree, ch chan int) {
	if t == nil {
		return
	}

	// Continue finding
	Walk(t.Left, ch)
	ch <- t.Value
	Walk(t.Right, ch)
}

// Same determines whether the trees
// t1 and t2 contain the same values.
func Same(t1, t2 *tree.Tree) bool {
	// Channel for T1
	t1_ch := make(chan int, 1)
	// Channel for T2
	t2_ch := make(chan int, 1)

	// Start Walking
	go Walking(t1, t1_ch)
	go Walking(t2, t2_ch)

	for {
		// Receiving value from T1's channel
		t1_v, t1_ok := <-t1_ch
		fmt.Println("done fetch t1 node")
		// Receiving value from T2's channel
		t2_v, t2_ok := <-t2_ch
		fmt.Println("done fetch t2 node")

		// When channel is closed, just break
		if !t1_ok && !t2_ok {
			break
		}

		// When those value is not equal, return False
		if t1_v != t2_v {
			return false
		}
	}
	return true
}

func main() {
	Same(tree.New(1), tree.New(1))
}
