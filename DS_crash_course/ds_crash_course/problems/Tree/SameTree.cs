namespace ds_crash_course.problems;

public class SameTree
{
    public bool IsSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;

        if (p == null || q == null) return false;

        var isLeftChildStillSameSubtree = IsSameTree(p.left, q.left);
        var isRightChildStillSameSubtree = IsSameTree(p.right, q.right);

        return p.val == q.val && isLeftChildStillSameSubtree && isRightChildStillSameSubtree;
    }
}