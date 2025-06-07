namespace ds_crash_course.problems;

public class MaximumDiffBetweenAncestorAndChild
{
    public int MaxAncestorDiff(TreeNode root)
    {
        return DFS(root, root.Value, root.Value);
    }

    public int DFS(TreeNode root, int min, int max)
    {
        if (root == null)
        {
            // With the assumption that at the leaf node, we already keep track
            // of all possible min & max along the path.
            return max - min;
        }
        
        // For sending to left node, only the left node will have all information need
        var localMin = Math.Min(min, root.Value);
        var localMax = Math.Max(max, root.Value);
        
        var maxDiffFromLeft = DFS(root.Left, localMin, localMax);
        var maxDiffFromRight = DFS(root.Right, localMin, localMax);
        
        return Math.Max(maxDiffFromLeft, maxDiffFromRight);
    }
}