namespace ds_crash_course.problems;

public class InvertBinaryTree
{
    public TreeNode? InvertTree(TreeNode? root) {
        if (root == null) {
            return null;
        }

        (root.Left, root.Right) = (root.Right, root.Left);

        InvertTree(root.Left);
        InvertTree(root.Right);
        return root;
    }
}