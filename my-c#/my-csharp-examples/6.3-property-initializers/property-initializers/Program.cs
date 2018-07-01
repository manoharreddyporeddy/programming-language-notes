using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace property_initializers
{
    class Program
    {
        static void Main(string[] args)
        {
            PepperoniPizzaOld o = new PepperoniPizzaOld();
            PepperoniPizzaNew1 o1 = new PepperoniPizzaNew1();
            PepperoniPizzaNew2 o2 = new PepperoniPizzaNew2();
            PepperoniPizzaNew3 o3 = new PepperoniPizzaNew3(1.0m);

        }
    }


    // old way
    public class PepperoniPizzaOld
    {
        // propery declaration
        public decimal ExtraPrice1 { get; set; }
        public decimal ExtraPrice2 { get; set; }
        public decimal ExtraPrice3 { get; set; }

        public PepperoniPizzaOld()         // constructor - at default constructor is must to initialize the properties
        {
            // properties are intialized
            ExtraPrice1 = 0.5m;
            ExtraPrice2 = 0.15m;
            ExtraPrice3 = 0.25m;
        }
        public PepperoniPizzaOld(string s) // constructor overload
        {
            // properties are intialized - again here - if you have constructor overload
            ExtraPrice1 = 0.5m;
            ExtraPrice2 = 0.15m;
            ExtraPrice3 = 0.25m;
        }
    }

    // new way - with property initializer
    public class PepperoniPizzaNew1
    {
        // propery initializer - declaration & initialization
        public decimal ExtraPrice1 { get; set; } = 0.5m;
        public decimal ExtraPrice2 { get; set; } = 0.15m;
        public decimal ExtraPrice3 { get; set; } = 0.25m;
    }

    public class PepperoniPizzaNew2
    {
        // propery initializer - declaration & initialization
        public decimal ExtraPrice1 { get; set; } = 0.5m;
        public decimal ExtraPrice2 { get; set; } = 0.15m;
        public decimal ExtraPrice3 { get; set; } = 0.25m;
        // more
        public decimal Price2 { get; set; } = 1m + 2m;
        public double Price3 { get; set; } = Math.PI;
        public string Name { get; protected set; } = "Cheeze";
        public List<string> Ingredients { get; } = new List<string> { "dough", "sauce", "cheese" };
        // compiler errors
        //public string Name2 { get; set; } = Name;
        //public decimal Price4 { get; set; } = InitMe(); //        A field initializer cannot reference the non-static field, method, or property 'PizzaBase.InitMe()'
        decimal InitMe() { return 5m; }
    }

    public abstract class PizzaBase
    {
        public string Name { get; protected set; } = "Cheeze";
        public virtual decimal Price { get; set; } = 3.00m;
        public PizzaBase(IEnumerable extraIngredients) { Price = 2.95m; }
    }
    public class PepperoniPizzaNew3 : PizzaBase
    {
        public decimal ExtraPrice { get; set; } = 0.25m;
        decimal price;
        public override decimal Price
        {
            get { return price; }
            set { price = value + .50m; }
        }
        public PepperoniPizzaNew3(decimal extraFees) : base(new List<string> { "pepperoni" })
        {
            ExtraPrice += extraFees;
            Name = "Pepperoni";
        }
    }
}
