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

// another optimized version

// func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
//     for root != nil {
//             // if root more than both p, q it's means there can be new root which value less then current one, so let's ship root node to root.left
//         if (root.Val > p.Val && root.Val > q.Val) {
//             root = root.Left
//         } else if (root.Val < p.Val && root.Val < q.Val) {
//             // if root less than both p, q, it's mean there can be new root which its value more than current root, so let's ship root node to root.Right
//             root = root.Right
//         } else {
//             return root
//         }
//     }
//     return nil
// }