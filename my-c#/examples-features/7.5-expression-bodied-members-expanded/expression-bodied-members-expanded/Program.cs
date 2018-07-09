using System;

namespace expression_bodied_members_expanded
{
    // expanded to constructor, destructor
    class Cls1
    {
        // expression-bodied constructor
        public Cls1(string label) => this.Label = label;

        // expression-bodied finalizer
        ~Cls1() => Console.Error.WriteLine("Finalized!");

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
            Cls1 o = new Cls1("lable1");
            Console.WriteLine(o.Label);
        }
    }
}
