using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace partial_types
{
    // Partial Class
    public partial class Employee
    {
        public void DoWork()
        {
        }
    }
    public partial class Employee
    {
        public void GoToLunch()
        {
        }
    }

    // partial method declaration
    //
    //// Definition in file1.cs  
    //partial void onNameChanged();
    //
    //// Implementation in file2.cs  
    //partial void onNameChanged()
    //{
    //    // method body  
    //}

    class Program
    {
        static void Main(string[] args)
        {
            // Partial Class
            Employee e1 = new Employee();
            e1.DoWork();
            e1.GoToLunch();

        }
    }
}
