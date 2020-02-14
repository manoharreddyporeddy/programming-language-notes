// using static
using static System.Math;    // using static class System.Math members
using static System.Console; // using static class System.Console members

namespace ns1
{
    class Program
    {
        static void Main(string[] args)
        {
            var pi = PI; // instead of Math.PI, since we have 'using static System.Math'
            var tenPower2 = Pow(10, 2); // instead of Math.Pow
            WriteLine(pi); // instead of Console.WriteLine
            WriteLine(tenPower2);
        }
    }
}
