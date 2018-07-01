using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace z_thread_safety_programming
{
    class Account
    {
        int balance;
        private Object thisLock = new Object();

        Random r = new Random();

        public Account(int initial)
        {
            balance = initial;
        }

        int Withdraw(int amount)
        {
            if (balance < 0)
            {            // This condition never is true unless the lock statement is commented out.
                throw new Exception("Negative Balance");
            }

            // Comment out the next line to see the effect of leaving out the lock keyword.
            lock (thisLock)
            {
                if (balance >= amount)
                {
                    Console.Write(
                        "Balance before Withdrawal :  " + balance +
                        "\t Amount to Withdraw        : -" + amount);
                    balance = balance - amount;
                    Console.WriteLine("\t Balance after Withdrawal  :  " + balance);

                    return amount;
                }

                return 0; // transaction rejected
            }
        }

        public void DoTransactions()
        {
            for (int i = 0; i < 10; i++)
            {
                try
                {
                    Withdraw(r.Next(1, 100));
                }
                catch (Exception e)
                {
                    // Negative balance exception
                    Console.WriteLine(e.Message);
                    break;
                }
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Thread[] threads = new Thread[10];
            Account acc = new Account(1000);
            for (int i = 0; i < 10; i++)
            {
                Thread t = new Thread(new ThreadStart(acc.DoTransactions));
                threads[i] = t;
            }
            for (int i = 0; i < 10; i++)
            {
                threads[i].Start();
            }

            //block main thread until all other threads have ran to completion.
            foreach (var t in threads)
            {
                t.Join();
            }
        }
    }


}

/*
 * with "lock (thisLock)"

Balance before Withdrawal :  1000        Amount to Withdraw        : -34         Balance after Withdrawal  :  966
Balance before Withdrawal :  966         Amount to Withdraw        : -33         Balance after Withdrawal  :  933
Balance before Withdrawal :  933         Amount to Withdraw        : -54         Balance after Withdrawal  :  879
Balance before Withdrawal :  879         Amount to Withdraw        : -2  Balance after Withdrawal  :  877
Balance before Withdrawal :  877         Amount to Withdraw        : -97         Balance after Withdrawal  :  780
Balance before Withdrawal :  780         Amount to Withdraw        : -11         Balance after Withdrawal  :  769
Balance before Withdrawal :  769         Amount to Withdraw        : -39         Balance after Withdrawal  :  730
Balance before Withdrawal :  730         Amount to Withdraw        : -84         Balance after Withdrawal  :  646
Balance before Withdrawal :  646         Amount to Withdraw        : -38         Balance after Withdrawal  :  608
Balance before Withdrawal :  608         Amount to Withdraw        : -56         Balance after Withdrawal  :  552
Balance before Withdrawal :  552         Amount to Withdraw        : -13         Balance after Withdrawal  :  539
Balance before Withdrawal :  539         Amount to Withdraw        : -53         Balance after Withdrawal  :  486
Balance before Withdrawal :  486         Amount to Withdraw        : -86         Balance after Withdrawal  :  400
Balance before Withdrawal :  400         Amount to Withdraw        : -46         Balance after Withdrawal  :  354
Balance before Withdrawal :  354         Amount to Withdraw        : -83         Balance after Withdrawal  :  271
Balance before Withdrawal :  271         Amount to Withdraw        : -20         Balance after Withdrawal  :  251
Balance before Withdrawal :  251         Amount to Withdraw        : -80         Balance after Withdrawal  :  171
Balance before Withdrawal :  171         Amount to Withdraw        : -7  Balance after Withdrawal  :  164
Balance before Withdrawal :  164         Amount to Withdraw        : -49         Balance after Withdrawal  :  115
Balance before Withdrawal :  115         Amount to Withdraw        : -34         Balance after Withdrawal  :  81
Balance before Withdrawal :  81  Amount to Withdraw        : -37         Balance after Withdrawal  :  44
Balance before Withdrawal :  44  Amount to Withdraw        : -38         Balance after Withdrawal  :  6
Balance before Withdrawal :  6   Amount to Withdraw        : -2  Balance after Withdrawal  :  4
Balance before Withdrawal :  4   Amount to Withdraw        : -4  Balance after Withdrawal  :  0

 *
 * withOUT     "lock (thisLock)"           - NOTE: Negative Balance
 * 
Balance before Withdrawal :  1000        Amount to Withdraw        : -59Balance before Withdrawal :  1000        Amount to Withdraw        : -52Balance before Withdrawal :  1000        Amount to Withdraw        : -63Balance before Withdrawal :  1000   Amount to Withdraw        : -78Balance before Withdrawal :  1000        Amount to Withdraw        : -86         Balance after Withdrawal  :  662
Balance before Withdrawal :  662         Amount to Withdraw        : -34         Balance after Withdrawal  :  628
Balance before Withdrawal :  628         Amount to Withdraw        : -79         Balance after Withdrawal  :  549
Balance before Withdrawal :  549         Amount to Withdraw        : -97         Balance after Withdrawal  :  748
Balance before Withdrawal :  452         Amount to Withdraw        : -56         Balance after Withdrawal  :  889
Balance before Withdrawal :  396         Amount to Withdraw        : -22         Balance after Withdrawal  :  374
         Balance after Withdrawal  :  826
Balance before Withdrawal :  374         Amount to Withdraw        : -49         Balance after Withdrawal  :  325
Balance before Withdrawal :  325         Amount to Withdraw        : -77         Balance after Withdrawal  :  941
Balance before Withdrawal :  248         Amount to Withdraw        : -59         Balance after Withdrawal  :  189
Balance before Withdrawal :  189         Amount to Withdraw        : -98         Balance after Withdrawal  :  91
Balance before Withdrawal :  91  Amount to Withdraw        : -52         Balance after Withdrawal  :  39
Balance before Withdrawal :  39  Amount to Withdraw        : -27         Balance after Withdrawal  :  12
Balance before Withdrawal :  12  Amount to Withdraw        : -7  Balance after Withdrawal  :  5
         Balance after Withdrawal  :  248
Balance before Withdrawal :  1000        Amount to Withdraw        : -90         Balance after Withdrawal  :  -85
Balance before Withdrawal :  662         Amount to Withdraw        : -24         Balance after Withdrawal  :  -109
Negative Balance
Balance before Withdrawal :  452         Amount to Withdraw        : -22         Balance after Withdrawal  :  -131
Negative Balance
         Balance after Withdrawal  :  452
Balance before Withdrawal :  628         Amount to Withdraw        : -71         Balance after Withdrawal  :  -202
Negative Balance
Balance before Withdrawal :  396         Amount to Withdraw        : -47         Balance after Withdrawal  :  -249
         Balance after Withdrawal  :  396
Negative Balance
Negative Balance
Balance before Withdrawal :  374         Amount to Withdraw        : -43         Balance after Withdrawal  :  -292
Negative Balance
Negative Balance
Negative Balance
 */


