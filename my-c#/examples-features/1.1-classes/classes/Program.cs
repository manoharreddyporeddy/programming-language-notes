using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ns1
{
    // class
    public class Employee
    {
        //	fields
        //	properties
        //	methods, along with constructor
        //	events
    }

    // inheritance
    public class Manager : Employee
    {
        // Employee    (fields, properties, methods and events) are inherited
        // New Manager (fields, properties, methods and events) go here...
    }

    public class Person
    {
        // (fields, properties, methods and events)

        // Constructor
        //      function
        //      same name as class
        //      no return type (not even void) 
        public Person()                 // Constructor that takes no arguments: Default
        {
            Name = "unknown";
        }
        public Person(string name1)      // Constructor that takes one argument: Parameterized
        {
            Name = name1;
        }
        
        // Method that overrides the base class (System.Object) implementation.
        public override string ToString()
        {
            return "Name is " + Name; // n1.ToString();
        }
        
        // Auto-implemented readonly (no set) property
        public string Name { get; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Employee object1 = null;            // reference
            Employee object2 = new Employee();  // reference to new object
            Employee object3 = object2;         // reference to same object

            Console.WriteLine("1  {0}", object1);
            Console.WriteLine("2  {0}", object2.ToString());
            Console.WriteLine("3  {0}", object3.ToString());

            // Call the constructor that has no parameters.
            Person p1 = new Person();        Console.WriteLine(p1.Name);
            var    p2 = new Person();        Console.WriteLine(p2.Name);

            // Call the constructor that has one parameter.
            var person3 = new Person("Sarah Jones");
            Console.WriteLine(person3.Name);
            Console.WriteLine(person3.ToString());
        }
    }
}
