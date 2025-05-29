namespace ds_crash_course.problems;

public class MaximumDepthTree
{
    public int CountDepthMax { get; set; } = 0;
    
    public int MaxDepth(TreeNode? root) {
        if (root == null) return 0;

        var countFromLeftChild = MaxDepth(root.Left);
        var countFromRightChild = MaxDepth(root.Right);
        
        return Math.Max(countFromLeftChild, countFromRightChild);
    }
}