/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val   int
 *     Left  *TreeNode
 *     Right *TreeNode
 * }
 */

 func find(node, p, q *TreeNode) *TreeNode {
    // Case to stop looking
    if (node == nil) {
        return nil
    }
    if node.Val == p.Val || node.Val == q.Val { 
        return node
    }
    
    // If not, continue finding
    leftExploreResult := find(node.Left, p, q)
    rightExploreResult := find(node.Right, p, q)
    if(leftExploreResult != nil && rightExploreResult != nil) {
        return node
    } 
    
    if (leftExploreResult != nil) {
        return leftExploreResult
    } 
    
    return rightExploreResult
}

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
    return find(root, p, q)
}