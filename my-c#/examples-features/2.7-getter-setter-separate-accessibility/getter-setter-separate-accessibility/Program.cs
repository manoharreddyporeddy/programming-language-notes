using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace getter_setter_separate_accessibility
{
    class Employee
    {
        private string name;
        public string Name
        {
            get { return name; }
            protected set { name = value; }
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
            //
            //      Error	CS0272	The property or indexer 'Employee.Name' cannot be used in this context because the set accessor is inaccessible
            //
            // emp.Name = "name 1";

        }
    }
}
