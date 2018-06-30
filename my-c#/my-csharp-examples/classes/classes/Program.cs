using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace classes
{
    // class
    public class Employee
    {
        // Fields, properties, methods and events go here...
    }
    // inheritance
    public class Manager : Employee
    {
        // Employee fields, properties, methods and events are inherited
        // New Manager fields, properties, methods and events go here...
    }

    public class Person
    {
        public Person()                 // Constructor that takes no arguments:
        {
            Name = "unknown";
        }
        public Person(string name)      // Constructor that takes one argument:
        {
            Name = name;
        }
        
        // Auto-implemented readonly property
        public string Name { get; }

        // Method that overrides the base class (System.Object) implementation.
        public override string ToString()
        {
            return Name.ToString();
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Employee object1;                   // reference
            Employee object2 = new Employee();  // reference to new object
            Employee object3 = object2;         // reference to same object


            // Call the constructor that has no parameters.
            Person p = new Person();
            var person1 = new Person();                     Console.WriteLine(person1.Name);

            // Call the constructor that has one parameter.
            var person2 = new Person("Sarah Jones");        Console.WriteLine(person2.Name);
            Console.WriteLine(person2.ToString());
        }
    }
}
