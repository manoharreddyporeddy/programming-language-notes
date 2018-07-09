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
        //	fields
        //	properties
        //	methods, along with constructor
        //	events
    }

    // inheritance
    public class Manager : Employee
    {
        // Employee (fields, properties, methods and events) are inherited
        //      New Manager (fields, properties, methods and events) go here...
    }



    public class Person
    {
        // (fields, properties, methods and events)

        public Person()                 // Constructor that takes no arguments:
        {
            Name = "unknown";
        }
        public Person(string name1)      // Constructor that takes one argument:
        {
            Name = name1;
        }
        
        // Auto-implemented readonly property
        public string Name { get; }

        // Method that overrides the base class (System.Object) implementation.
        public override string ToString()
        {
            return "Name is " + Name.ToString();
        }
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
            var p2 = new Person();          Console.WriteLine(p2.Name);

            // Call the constructor that has one parameter.
            var person3 = new Person("Sarah Jones");
            Console.WriteLine(person3.Name);
            Console.WriteLine(person3.ToString());
        }
    }
}
