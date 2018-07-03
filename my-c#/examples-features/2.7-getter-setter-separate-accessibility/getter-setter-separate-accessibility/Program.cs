using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace getter_setter_separate_accessibility
{
    class Employee
    {
        private string m_name;
        public string Name
        {
            get { return m_name; }
            protected set { m_name = value; }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Employee emp = new Employee();

            // compile error
            //      Error	CS0272	The property or indexer 'Employee.Name' cannot be used in this context because the set accessor is inaccessible
            // emp.Name = "name 1";
        }
    }
}
