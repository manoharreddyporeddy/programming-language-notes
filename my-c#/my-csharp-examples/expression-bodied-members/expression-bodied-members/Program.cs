using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace expression_bodied_members
{
    class Old
    {
        string FirstName = "a";
        string LastName = "b";

        public string GetFullName()
        {
            return FirstName + " " + LastName;
        }
        public string FormalName
        {
            get { return FirstName[0] + ". " + LastName; }
        }
    }

    class New1
    {
        string FirstName = "a";
        string LastName = "b";

        // expressions
        public string GetFullName() => FirstName + " " + LastName;
        public string FormalName => FirstName[0] + ". " + LastName;
    }


    class New2
    {
        public class Accessor1 { }
        public class IndexerValueGetter
        {
            public string Name { get; set; }
            public Type ValueType { get; set; }
            public Type DeclaringType { get; set; }
            public void SetValue(object t, object s) { }
            public object GetValue(object t) { return null; }
        }
        public class ArrayIndexer1 : Accessor1
        {
            private readonly IndexerValueGetter _getter;
            public ArrayIndexer1(IndexerValueGetter getter) { _getter = getter; }

            // expressions
            public string FieldName => _getter.Name;
            public Type PropertyType => _getter.ValueType;
            public PropertyInfo InnerProperty => null;
            public Type DeclaringType => _getter.DeclaringType;
            public string Name => _getter.Name;
            public Type OwnerType => DeclaringType;
            public void SetValue(object target, object propertyValue) => _getter.SetValue(target, propertyValue);
            public object GetValue(object target) => _getter.GetValue(target);
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Old o = new Old();
            New1 n1 = new New1();
            New2 n2 = new New2();
        }
    }
}
