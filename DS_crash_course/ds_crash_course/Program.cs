namespace ds_crash_course;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");

        var demoLeftNode = new TreeNode()
        {
            Value = 1,
            Left = null,
            Right = null
        };
        var demoRightNode = new TreeNode()
        {
            Value = 5,
            Left = null,
            Right = null
        };
        var root = new TreeNode()
        {
            Value = 2,
            Left = demoLeftNode,
            Right = demoRightNode
        };
        
        
    }
}