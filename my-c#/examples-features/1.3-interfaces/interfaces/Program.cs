using System;

namespace interfaces
{
    // interface
    //      is important since C# does not have multiple inheritance
    interface ICar
    {
        void Print();
    }

    interface ICar2
    {
        void Print2();
    }

    // class implements interface
    public class Car : ICar
    {
        string Name = "my car 1";

        public void Print()
        {
            Console.WriteLine(Name);
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Car c1 = new Car();
            c1.Print();
        }
    }
}
