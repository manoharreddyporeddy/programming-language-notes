using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fields_and_properties
{
    class Properties1
    {
        // private field
        private int _id;        // custom storage defined (field defined)
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

                /*  // validations can be made

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




        // automatic storage defined (not field defined)

        // initialized to default value (null)
        public string FirstName { get; set; }       // property
                                                    // declarations for
                                                    //      a get and set accessor
                                                    //      that retrieves and assigns the value of that property
                                                    // initialized to custom value (empty string)
        public string FirstName2 { get; set; } = string.Empty;

        // read-only property
        public string FirstName3 { get; private set; }

        public ICollection<string> points { get; } = new List<string>();

        public string FirstName4 { get; set; }
        public string LastName4 { get; set; }
        public string FullName4 { get { return FirstName4 + LastName4; } }
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
                    fullName = $"{FirstName} {LastName}";
                return fullName;
            }
        }
    }




    class Program
    {
        static void Main(string[] args)
        {
        }

    }

}
