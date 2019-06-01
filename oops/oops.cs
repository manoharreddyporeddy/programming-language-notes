using System;

/*
class Bottle {

};

class Chair {
  int numberOfLegs;
  string color;
};
*/

// class
class MobilePhone {

  // constructor
  //  initalize some default values
  //    for member variables
  //    or call member functions
  public MobilePhone() {
    brand = "Unknown";
    os = "Android";
    lockPhone();
  }


  // members
  
  // member function/ methods
  public virtual void unlock() {
    bool displayDone = displayScreen();

    if (displayDone == true) {
      Console.WriteLine ("unlock successs");
    } else {
      Console.WriteLine ("unlock failed");
    }
  }

  // methods
  public void lockPhone() {
    this.appsShown = false;
    this.backgroundcolor = "black";
  }

  public void displayStatus() {
    Console.WriteLine (
      " this.appsShown value is " +
      this.appsShown +
      " this.backgroundcolor value is " +
      this.backgroundcolor +
      " this.brand is " +
      this.brand
      );
  }

  public string getBackgroundColor() {
    return this.backgroundcolor;
  }

  public void setBackgroundColor(string bgcolor) {
    this.backgroundcolor = bgcolor;
  }

  // member variables / fields & properties
  protected string brand;
  protected string os;
  private bool appsShown;
  private string backgroundcolor;

  protected bool displayScreen() {

    this.appsShown = false;

    Console.WriteLine (" icon1 icon2 ");
    Console.WriteLine (" icon3 icon4 ");
    Console.WriteLine (" icon5 icon6 ");

    this.appsShown = true;
    this.backgroundcolor = "white";

    return appsShown;
  }


  // events

};

class IPhone : MobilePhone {
  // constructor function
  public IPhone() {
    this.brand = "Apple";
    this.os = "iOS";
  }

  public override void unlock() {
    base.unlock();
    this.showPolishedIcons();
  }

  private void showPolishedIcons() {
    Console.WriteLine (" polished icons display");
  }

}

class Printer {
  // function
  public void print (string s1) {
    Console.WriteLine(s1);
  }
  // function overload
  public void print (string s1, string s2) {
    Console.WriteLine(s1);
    Console.WriteLine(s2);
  }
  // function overload
  public void print (int n1, bool b1, string s1) {
    Console.WriteLine(n1);
    Console.WriteLine(b1);
    Console.WriteLine(s1);
  }
}

class MyMainClass1 {
  public static void Main (string[] args) {
    Console.WriteLine ("Hello World ........");

    // Chair yellowchair, yellowchair2;
    // Bottle gymbottle, normalbottle;
    // MobilePhone mobilephone, deskphone;    

    MobilePhone mobilephone;
    mobilephone = new MobilePhone();

    mobilephone.displayStatus();
    mobilephone.unlock();
    mobilephone.displayStatus();

    mobilephone.displayStatus();
    mobilephone.setBackgroundColor("orange");
    mobilephone.displayStatus();
    mobilephone.setBackgroundColor("green");
    mobilephone.displayStatus();


    IPhone iPhone1;
    iPhone1 = new IPhone();
    iPhone1.displayStatus();
    iPhone1.unlock();

    MobilePhone parent1 = new IPhone();
    parent1.unlock();


    Printer p = new Printer();
    p.print("ok1");
    p.print("ok1", "ok2");
    p.print(1, true, "ok1");
  }
}
