import SavingsOverTime from "../graphs/SavingsOverTime";
import TotalBalance from "../graphs/TotalBalance";
import ExpenseOverTime from "../graphs/ExpenseOverTime";
import TransactionHistory from "../graphs/TransactionHistory";
import SavingGoal from "../graphs/SavingGoal";
import SavingExpenseChart from "../graphs/SavingExpenseChart";

const Dashboard = () => {
  return (
    <div className="px-8 py-8 h-screen">
      <div className="lg:flex w-full gap-8  h-full">
        <div className="flex flex-col gap-8 flex-[3] ">
          <div className="flex-1 lg:flex border h-full rounded-3xl">

            <div className="p-4 flex-1 h-fit">
              <p className=" text-lg text-black/50 mb-8 font-bold">
                Total Balance:
              </p>
              <h1 className="text-4xl font-semibold">
                $ 187,039<span className="text-black/50 text-3xl">.00</span>
              </h1>
              <p className="text-green-600 font-medium">
                +6.7%
                <span className="font-normal text-black/50">
                  {" "}
                  From Last Month
                </span>
              </p>
              <div className="flex">
                <TotalBalance></TotalBalance>
              </div>
            </div>

            <div className="p-4 flex-1 h-fit">
               <p className=" text-lg text-black/50 mb-8 font-bold">Total Savings:</p>
               <h1 className="text-4xl font-semibold">$ 100,250<span className="text-black/50 text-3xl">.95</span></h1>
               <p className="text-green-600 font-medium">+10.2%<span className="font-normal text-black/50"> From Last Month</span></p>
               <div className="flex">

               <SavingsOverTime></SavingsOverTime>
            </div>

            </div>

            <div className="p-4 flex-1 h-fit">
               <p className=" text-lg text-black/50 mb-8 font-bold">Total Expense:</p>
               <h1 className="text-4xl font-semibold">$ 5,220<span className="text-black/50 text-3xl">.32</span></h1>
               <p className="text-red-600 font-medium">+5.2%<span className="font-normal text-black/50"> From Last Month</span></p>
               <div className="flex">

               <ExpenseOverTime></ExpenseOverTime>
               </div>

           </div>
          </div>
          <div className="flex-1 lg:gap-8 lg:flex h-full">
            <div className="flex-[2] h-full">
                <div className="border rounded-3xl p-4 overflow-clip">
                    <p className=" text-lg text-black/50 mb-2 font-bold">Savings Vs Expense:</p>
                    <SavingExpenseChart/>
                </div>
            </div>
            <div className="flex-1 h-full mt-8 lg:mt-0">
                <div className="border rounded-3xl p-4 overflow-clip">
                    <p className=" text-lg text-black/50 mb-2 font-bold">Saving Goal:</p>
                    <SavingGoal/>
                </div>
            </div>
          </div>
        </div>

        <div className="flex-1 h-full mt-8 lg:mt-0">
            <div className="p-4 pb-0 h-full bg-gray-100 rounded-3xl overflow-hidden">
               <p className=" text-lg text-black/50 mb-8 font-bold">Transaction History:</p>
               <div className="flex">

               <TransactionHistory></TransactionHistory>
               </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
