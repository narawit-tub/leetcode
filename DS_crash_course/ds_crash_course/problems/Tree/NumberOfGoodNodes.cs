namespace ds_crash_course.problems;

public class NumberOfGoodNodes
{
    /**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

    public class Solution {
        public int ReGoodNotes(TreeNode root, int maxSoFar) {
            if (root == null) return 0;

            maxSoFar = Math.Max(maxSoFar, root.val);
            var noOfLeftGoodNodes = ReGoodNotes(root.left, maxSoFar);
            var noOfRightGoodNodes = ReGoodNotes(root.right, maxSoFar);

            var noOfGoodNodes = noOfLeftGoodNodes + noOfRightGoodNodes;
            if (root.val >= maxSoFar) {
                noOfGoodNodes++;
            }
        
            return noOfGoodNodes;
        }
    
        public int GoodNodes(TreeNode root) {
            return ReGoodNotes(root, root.val);
        }
    }
}