using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fields_and_properties
{
    class Properties1
    {

        // field
        // property (needs field (automatic/custom))


        // 1. automatic storage defined for field (if field not defined)

        /*
          property

          declarations for
               a get and set accessor
               that
                    retrieves and
                    assigns
                        the value of that property
        */


        // property - initialized to default value (null)
        public string SomeProp { get; set; }

        // initialized to custom value (empty string)
        public string Prop2 { get; set; } = string.Empty;

        // read-only property
        public string Prop3 { get; private set; }

        public ICollection<string> points { get; } = new List<string>();

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get { return FirstName + LastName; } }



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

            p.FirstName = "hello";
            p.LastName = " world";

            Console.WriteLine(p.FullName);
        }
    }

}
