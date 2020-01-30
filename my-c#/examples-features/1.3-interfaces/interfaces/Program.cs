using System;

namespace interfaces
{
    // interface
    //      is important since C#   does not   have multiple inheritance
    interface IA
    {
        void Print();
    }

    interface IB
    {
        void Print2();
    }

    // class implements interface
    public class C : IA, IB
    {
        string Name = "my car 1";

        public void Print()
        {
            Console.WriteLine("Print  " + Name);
        }
        public void Print2()
        {
            Console.WriteLine("Print2 " + Name);
        }

    }

    class Program
    {
        static void Main(string[] args)
        {
            C c1 = new C();
            c1.Print();
            c1.Print2();
        }
    }
}
