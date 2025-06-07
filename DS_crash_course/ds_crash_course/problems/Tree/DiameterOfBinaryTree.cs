namespace ds_crash_course.problems;

public class Solution {
    public int MaxDiameterSoFar = 0;

    private int DFS(TreeNode root) {
        if (root == null) {
            return 0;
        }

        var leftHeight = DFS(root.left);
        var rightHeight = DFS(root.right);
        var localDiameter = leftHeight + rightHeight;

        MaxDiameterSoFar = Math.Max(MaxDiameterSoFar, localDiameter);

        return Math.Max(leftHeight, rightHeight) + 1;
    }

    public int DiameterOfBinaryTree(TreeNode root) {
        DFS(root);
        return MaxDiameterSoFar;
    }
}