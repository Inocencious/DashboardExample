

const TransactionHistory = () => {
    return(
        <table className="w-full h-full table-auto ">
            <thead className="text-left text-black/50 ">
                <tr>
                <th className="py-4 pb-8 ">Type</th>
                <th className="py-4 pb-8 text-right">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b-2">
                <td className="font-medium py-2">
                <p className="text-black/50 text-sm">2024-03-30</p>
                <p>Salary</p>
                </td>
                <td className="text-green-500 font-medium text-right py-2 align-bottom">3000</td>
                </tr>
                <tr className="border-b-2">
                <td className="font-medium py-2">
                <p className="text-black/50 text-sm">2024-03-30</p>
                <p>Groceries</p>
                </td>
                <td className="text-red-500 font-medium text-right py-2 align-bottom">200</td>
                </tr>
                <tr className="border-b-2">
                <td className="font-medium py-2">
                <p className="text-black/50 text-sm">2024-03-25</p>
                <p>Rent</p>
                </td>
                <td className="text-red-500 font-medium text-right py-2 align-bottom">1200</td>
                </tr>
                <tr className="border-b-2">
                <td className="font-medium py-2">
                <p className="text-black/50 text-sm">2024-03-24</p>
                <p>Utilities</p>
                </td>
                <td className="text-red-500 font-medium text-right py-2 align-bottom">150</td>
                </tr>
                <tr className="border-b-2">
                <td className="font-medium py-2">
                <p className="text-black/50 text-sm">2024-03-22</p>
                <p>Freelance</p>
                </td>
                <td className="text-green-500 font-medium text-right py-2 align-bottom">500</td>
                </tr>
                <tr className="border-b-2">
                <td className="font-medium py-2">
                <p className="text-black/50 text-sm">2024-03-15</p>
                <p>Entertainment</p>
                </td>
                <td className="text-red-500 font-medium text-right py-2 align-bottom">100</td>
                </tr>
                <tr className="border-b-2">
                <td className="font-medium py-2">
                <p className="text-black/50 text-sm">2024-03-10</p>
                <p>Bonus</p>
                </td>
                <td className="text-green-500 font-medium text-right py-2 align-bottom">500</td>
                </tr>
                <tr className="border-b-2">
                <td className="font-medium py-2">
                <p className="text-black/50 text-sm">2024-03-01</p>
                <p>Groceries</p>
                </td>
                <td className="text-red-500 font-medium text-right py-2 align-bottom">220</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TransactionHistory