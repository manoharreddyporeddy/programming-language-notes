using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ns1
{
    class Employee
    {
        private string name;
        public string Name
        {
            get { return name; } // getter -- public
            protected set { name = value; } // setter -- protected
        }
        private string name2;
        public string Name2
        {
            protected get { return name2; } // getter -- protected
            set { name2 = value; } // setter -- public
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Employee emp = new Employee();

            // OK - get
            string s1 = emp.Name;

            // compile error - set is protected
            //emp.Name = "name 1";
            // Error	CS0272	The property or indexer 'Employee.Name' cannot be used in this context because the set accessor is inaccessible

            // ----------

            // compile error - get accessor is inaccisible
            //string s2 = emp.Name2;

            // compile error -set is protected/
            emp.Name2 = "name 2";
        }
    }
}
