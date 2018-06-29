using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System;                // using                        System         namespace
using static System.Math;    // using static members of this System.Math    class
using static System.Console; // using static members of this System.Console class

public class Circle
{
    public Circle(double radius)
    {
        Radius = radius;
    }

    public double Radius { get; set; }

    public double Diameter
    {
        get { return 2 * Radius; }
    }

    public double Circumference
    {
        get { return 2 * Radius * PI; }     // Math.PI;
    }

    public double Area
    {
        get { return PI * Pow(Radius, 2); } // Math.PI;  Math.Pow
    }

    public void PrintRadius()
    {
        WriteLine(Radius);                  // Console.WriteLine
    }
}

namespace using_static
{
    class Program
    {
        static void Main(string[] args)
        {
            Circle o = new Circle(5);
            o.PrintRadius();
        }
    }
}
