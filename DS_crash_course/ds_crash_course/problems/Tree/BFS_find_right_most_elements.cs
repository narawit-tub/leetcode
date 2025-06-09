namespace ds_crash_course.problems;

public class BFS_find_right_most_elements
{
    public IList<int> RightSideView(TreeNode root) {
        if (root == null) {
            return new List<int>();
        }

        var answer = new List<int>();

        Queue<TreeNode> nodeInOneLevelToProcess = new Queue<TreeNode>();
        nodeInOneLevelToProcess.Enqueue(root);

        // Each loop will process one level at a time.
        while(nodeInOneLevelToProcess.Count > 0) {
            var rightMostElement = nodeInOneLevelToProcess.LastOrDefault();
            if (rightMostElement != null) {
                answer.Add(rightMostElement.val);
            }

            var numberOfNodesInCurrentLevel = nodeInOneLevelToProcess.Count;
            for (int i = 0; i < numberOfNodesInCurrentLevel; i++) {
                var node = nodeInOneLevelToProcess.Dequeue();

                if (node.left != null) {
                    nodeInOneLevelToProcess.Enqueue(node.left);
                }

                if (node.right != null) {
                    nodeInOneLevelToProcess.Enqueue(node.right);
                }   
            }
        }

        return answer;
    }
}