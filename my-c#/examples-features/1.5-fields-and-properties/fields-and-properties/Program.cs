using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fields_and_properties
{
    class Properties1
    {

        // a. field
        // property (needs field (automatic/custom))

        /*
          b. property

          declarations for
               a get and
               a set accessor
                   that
                        retrieves and
                        assigns
                            the value of that property
        */


        // 1. automatic storage defined for field (if field not defined)

        // property - initialized to default value (null)
        public string Prop1 { get; set; } // automatic field // null

        // initialized to custom value (empty string)
        public string Prop2 { get; set; } = string.Empty;

        // read-only property
        public string Prop3 { get; private set; } // private set

        public ICollection<string> points { get; } = new List<string>();

        public string FirstName { get; set; } // automatic
        public string LastName { get; set; }  // automatic
        public string FullName { get { return FirstName + LastName; } } // custom



        // 2. custom storage defined for field (if field defined)

        // private field
        private int _id;

        // public property
        public int Id
        {
            get
            {
                return _id;
            }
            set
            {
                _id = value;

                /*
                // validations can be made

                if (value != 0)
                {
                    _id = value;
                }
                else
                {
                    throw new ArgumentOutOfRangeException();
                }
                */
            }
        }

    }



    // Cached evaluated property
    public class Person
    {
        private string firstName;
        public string FirstName
        {
            get => firstName;
            set
            {
                firstName = value;
                lastName = null;
                fullName = null;
            }
        }

        private string lastName;
        public string LastName
        {
            get => lastName;
            set
            {
                lastName = value;
                fullName = null;
            }
        }

        private string fullName;
        public string FullName
        {
            get
            {
                if (fullName == null)
                {
                    fullName = $"{FirstName} {LastName}";
                }

                return fullName;
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Person p = new Person();

            p.FirstName = "f1";
            p.LastName = " l1";
            Console.WriteLine(p.FullName);

            p.FirstName = "f2";
            Console.WriteLine(p.FullName);
        }
    }

}
