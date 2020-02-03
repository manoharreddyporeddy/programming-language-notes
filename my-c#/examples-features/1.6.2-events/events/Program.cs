using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
    Events are a way for an object to broadcast
        (to all interested components in the system)
        that something has happened.

    Any other component
        can subscribe to the event,
        and be notified when an event is raised.

    Events are, like delegates, a late binding mechanism.
        In fact, events are built on the language support for delegates.
 */

namespace events
{
    // declare  delegate type
    public delegate void WelcomeUserD(ref string str);

    class Program
    {
        // declare  event type
        public event WelcomeUserD WelcomeUserE;
        // WelcomeUserD welcomeuserD1;

        public Program()
        {
            // this.welcomeuserD1 = new WelcomeUserD(this.WelcomeUser1);
            // this.WelcomeUserE += new WelcomeUserD(this.WelcomeUser1);
            // this.WelcomeUserE += new WelcomeUserD(this.WelcomeUser2);

            this.WelcomeUserE += this.WelcomeUser1;
            this.WelcomeUserE += this.WelcomeUser2;
        }

        public void WelcomeUser1(ref string username)
        {
            username += " ok1 ";
        }
        public void WelcomeUser2(ref string username)
        {
            username += " ok2 ";
        }

        static void Main(string[] args)
        {
            Program obj1 = new Program();
            // string result = obj1.welcomeuserD1("user1");
            string u1 = "user1";
            obj1.WelcomeUserE(ref u1);
            Console.WriteLine(u1);
        }
    }
}

namespace events2
{
    /*
    class cls1
    {
        // define an event
        public event EventHandler<FileListArgs> Progress;
        // The type of the event is EventHandler<FileListArgs>, it must be a delegate type

        static void func1(string[] args)
        {
            // to raise the event
            //      call the event handlers using the delegate invocation syntax
            Progress?.Invoke(this, new FileListArgs(file));


            EventHandler<FileListArgs> onProgress = (sender, eventArgs) =>
            Console.WriteLine(eventArgs.FoundFile);

            // subscribe to an event
            lister.Progress += OnProgress;
            // unsubscribe to an event
            lister.Progress -= onProgress;
        }
    }
*/
}