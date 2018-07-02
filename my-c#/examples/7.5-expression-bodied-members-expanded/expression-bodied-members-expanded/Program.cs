using System;

namespace expression_bodied_members_expanded
{
    // expanded to constructor, destructor
    class ExpressionBodied1
    {
        // expression-bodied constructor
        public ExpressionBodied1(string label) => this.Label = label;

        // expression-bodied finalizer
        ~ExpressionBodied1() => Console.Error.WriteLine("Finalized!");

        private string label;

        // expression-bodied get / set accessors.
        public string Label
        {
            get => label;
            set => this.label = value ?? "Default label";
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            ExpressionBodied1 o = new ExpressionBodied1("lable1");
            Console.WriteLine(o.Label);
        }
    }
}
