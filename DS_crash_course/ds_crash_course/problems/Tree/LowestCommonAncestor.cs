namespace ds_crash_course.problems;

public class LowestCommonAncestor
{
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null) return null;
        
        if (root.val == p.val || root.val == q.val) return root;

        var descendentFromLeft = LowestCommonAncestor(root.left, p, q);
        var descendentFromRight = LowestCommonAncestor(root.right, p, q);

        if (descendentFromLeft != null && descendentFromRight != null) return root;

        return descendentFromLeft ?? descendentFromRight;
    }
}