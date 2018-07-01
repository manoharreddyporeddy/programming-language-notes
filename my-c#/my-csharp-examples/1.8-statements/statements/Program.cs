using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace statements
{
    class Program
    {
        public void a0()
        {
            // see https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/statements

            // Variable declaration statements.
            double area;
            double radius = 2;

            // Constant declaration statement.
            const double pi = 3.14159;



            // Expression statement (assignment).
            area = 3.14 * (radius * radius);
            // Expression statement (method invocation).
            System.Console.WriteLine();
            // Expression statement (new object creation).
            System.Collections.Generic.List<string> strings = new System.Collections.Generic.List<string>();
        }

        public char GetFirstCharacter()
        {
            try
            {
                // something
                return 'a';
            }
            catch (NullReferenceException e)
            {
                throw;

                // throw e
                //      to instantiate a new exception that you pass on to the caller.
                //      In this case, the stack trace of the original exception,
                //          which is available from the StackTrace property, is not preserved.
            }
        }

        public void a()
        {
            string arg = (1 == 0) ? "good" : throw new ArgumentException("You must supply an argument");
        }

        public void b()
        {
            int n;

            // good
            n = 123;
            try
            {
                // bad - Do not initialize this variable here.  
                // n = 123;
            }
            catch
            {
            }
            // Error: Use of unassigned local variable 'n'.  
            Console.Write(n);
        }


        static void ProcessString(string s)
        {
            if (s == null)
            {
                throw new ArgumentNullException();
            }
        }
        static void demo()
        {
            string s = null; // For demonstration purposes.

            try
            {
                ProcessString(s);
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        static void Main(string[] args)
        {
            try
            {
                demo();
            }
            catch (Exception e)
            {
                Console.WriteLine("{0} Exception caught.", e);

                /*
                 
                 // when demo function does not have try-catch
                        System.ArgumentNullException: Value cannot be null.
                           at statements.Program.ProcessString(String s) in C:\repo\my-programming-language-notes\my-c#\my-csharp-examples\statements\statements\Program.cs:line 78
                           at statements.Program.demo() in C:\repo\my-programming-language-notes\my-c#\my-csharp-examples\statements\statements\Program.cs:line 85
                           at statements.Program.Main(String[] args) in C:\repo\my-programming-language-notes\my-c#\my-csharp-examples\statements\statements\Program.cs:line 91 Exception caught.
                        Press any key to continue . . .

                 // when demo function HAS try-catch, with "throw;" in catch
                        System.ArgumentNullException: Value cannot be null.
                           at statements.Program.ProcessString(String s) in C:\repo\my-programming-language-notes\my-c#\my-csharp-examples\statements\statements\Program.cs:line 78
                           at statements.Program.demo() in C:\repo\my-programming-language-notes\my-c#\my-csharp-examples\statements\statements\Program.cs:line 91
                           at statements.Program.Main(String[] args) in C:\repo\my-programming-language-notes\my-c#\my-csharp-examples\statements\statements\Program.cs:line 98 Exception caught.
                        Press any key to continue . . .

                 // when demo function HAS try-catch, with "throw e;" in catch
                        System.ArgumentNullException: Value cannot be null.
                           at statements.Program.demo() in C:\repo\my-programming-language-notes\my-c#\my-csharp-examples\statements\statements\Program.cs:line 91
                           at statements.Program.Main(String[] args) in C:\repo\my-programming-language-notes\my-c#\my-csharp-examples\statements\statements\Program.cs:line 98 Exception caught.
                        Press any key to continue . . .

                */
            }
        }

        void ReadFile(int index)
        {
            // To run this code, substitute a valid path from your local machine
            string filepath = @"c:\users\public\test.txt";

            System.IO.StreamReader file = new System.IO.StreamReader(filepath);
            char[] buffer = new char[10];
            try
            {
                file.ReadBlock(buffer, index, buffer.Length);
            }
            catch (System.IO.IOException e)
            {
                Console.WriteLine("Error reading from {0}. Message = {1}", filepath, e.Message);
            }
            finally
            {
                if (file != null)
                {
                    file.Close();
                }
            }
            // Do something with buffer...
        }

        void others()
        {
            // iterators
            //      yield return
            //      yield break


            // memory related - should not move
            //      fixed

        }
    }

    class Account
    {
        decimal balance;
        private Object thisLock = new Object();

        public void Withdraw(decimal amount)
        {
            lock (thisLock)
            {
                if (amount > balance)
                {
                    throw new Exception("Insufficient funds");
                }
                balance -= amount;
            }
        }
    }


    // await
    // The await operator is applied to a task in an asynchronous method to insert a suspension point in the execution of the method until the awaited task completes. The task represents ongoing work.

    // empty statement
    class E
    {
        bool ProcessMessage()
        {
            //..
            // return true;

            return false;
        }

        void ProcessMessages()
        {
            while (ProcessMessage())
                ; // Statement needed here.     // empty statement
        }

        void F()
        {
            bool done = true;

            //...
            if (done) goto exit;        // Labeled statementa
            //...

            exit:
            ; // Statement needed here.     // empty statement
        }

        void em()
        {
            // Embedded statement in  block.
            foreach (string s in System.IO.Directory.GetDirectories(
                                    System.Environment.CurrentDirectory))
            { // Recommended
                System.Console.WriteLine(s);
            }


            if (true) {
                // embedded statement in a block
                int radius = 5;
                Console.WriteLine(radius);
            }

            string s2 = "";
            if (true)
            {
                if (s2.StartsWith("CSharp"))
                {
                    if (s2.EndsWith("TempFolder"))
                    {
                        // ..
                    }
                }
            }

            const int val = 5;
            if (val < 4)
            {
                // Unreachable Statements
                System.Console.WriteLine("I'll never write anything."); //CS0162
            }
        }
    }


}
