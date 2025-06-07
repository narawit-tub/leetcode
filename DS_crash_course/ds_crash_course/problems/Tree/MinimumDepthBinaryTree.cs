namespace ds_crash_course.problems;

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

public class MinimumDepthBinaryTree
{
  public int MinDepth(TreeNode root)
  {
      if (root == null) return 0;
      
      var minDepthOfLeft = MinDepth(root.Left);
      var minDepthOfRight = MinDepth(root.Right);

      // Mean both right and left have path to left, choose the min one
      if (minDepthOfLeft > 0 && minDepthOfRight > 0)
      {
          return Math.Min(minDepthOfLeft, minDepthOfRight) + 1;
      }
    
      return Math.Max(minDepthOfLeft, minDepthOfRight) + 1;
  }
}