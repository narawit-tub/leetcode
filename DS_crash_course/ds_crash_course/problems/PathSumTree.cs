namespace ds_crash_course.problems;

public class PathSumTree
{
    public bool HasPathSum(TreeNode root, int targetSum) {
        // Base case
        if (root == null) return false;
        if (root.Left == null && root.Right == null) {
            return targetSum - root.Value == 0;
        }

        var isFoundAnyPathFromLeftThat = HasPathSum(root.Left, targetSum - root.Value);
        var isFoundAnyPathFromRightThat = HasPathSum(root.Right, targetSum - root.Value);

        return isFoundAnyPathFromLeftThat || isFoundAnyPathFromRightThat;
    }
}