using System;

namespace interface_example
{
    // interface
    //      is important since C# does not have multiple inheritance
    interface ICar<T>
    {
        void Print();
    }

    // class implements interface
    public class Car : ICar<Car>
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
