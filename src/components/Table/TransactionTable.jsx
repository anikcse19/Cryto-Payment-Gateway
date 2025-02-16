import { HiDotsVertical } from "react-icons/hi";

const transactions = [
  {
    id: 108746,
    date: "Today 1:10 AM",
    from: "0xabc12345...",
    to: "0xdef67890...",
    status: "Pending",
    amount: "0.001 ETH",
    usd: "USD 3",
  },
  {
    id: 108745,
    date: "Today 12:50 AM",
    from: "0x1486157C...",
    to: "0xDD48c3C...",
    status: "Pending",
    amount: "0.00075902 ETH",
    usd: "USD 2",
  },
  {
    id: 108744,
    date: "Today 12:23 AM",
    from: "bc1qxyz...",
    to: "Stripe",
    status: "Pending",
    amount: "USD 99",
    usd: "Stripe",
  },
  {
    id: 108743,
    date: "2/13/2025 11:20 PM",
    from: "bc1qabc...",
    to: "bc1qxyz...",
    status: "Pending",
    amount: "0.00002094 BTC",
    usd: "USD 2",
  },
  {
    id: 108742,
    date: "2/13/2025 10:30 PM",
    from: "0xD179d71...",
    to: "0xC9b4cc1a...",
    status: "Pending",
    amount: "2.500 USDT",
    usd: "USD 2.5",
  },
  {
    id: 108741,
    date: "2/13/2025 9:15 PM",
    from: "0x1486157C...",
    to: "0xDD48c3C...",
    status: "Pending",
    amount: "0.00085001 ETH",
    usd: "USD 3",
  },
  {
    id: 108740,
    date: "2/13/2025 3:45 PM",
    from: "cus_XYZ123",
    to: "Stripe",
    status: "Completed",
    amount: "USD 49",
    usd: "Stripe",
  },
  {
    id: 108746,
    date: "Today 1:10 AM",
    from: "0xabc12345...",
    to: "0xdef67890...",
    status: "Pending",
    amount: "0.001 ETH",
    usd: "USD 3",
  },
  {
    id: 108745,
    date: "Today 12:50 AM",
    from: "0x1486157C...",
    to: "0xDD48c3C...",
    status: "Pending",
    amount: "0.00075902 ETH",
    usd: "USD 2",
  },
  {
    id: 108744,
    date: "Today 12:23 AM",
    from: "bc1qxyz...",
    to: "Stripe",
    status: "Pending",
    amount: "USD 99",
    usd: "Stripe",
  },
  {
    id: 108743,
    date: "2/13/2025 11:20 PM",
    from: "bc1qabc...",
    to: "bc1qxyz...",
    status: "Pending",
    amount: "0.00002094 BTC",
    usd: "USD 2",
  },
  {
    id: 108742,
    date: "2/13/2025 10:30 PM",
    from: "0xD179d71...",
    to: "0xC9b4cc1a...",
    status: "Pending",
    amount: "2.500 USDT",
    usd: "USD 2.5",
  },
  {
    id: 108741,
    date: "2/13/2025 9:15 PM",
    from: "0x1486157C...",
    to: "0xDD48c3C...",
    status: "Pending",
    amount: "0.00085001 ETH",
    usd: "USD 3",
  },
  {
    id: 108740,
    date: "2/13/2025 3:45 PM",
    from: "cus_XYZ123",
    to: "Stripe",
    status: "Completed",
    amount: "USD 49",
    usd: "Stripe",
  },
];

const TransactionTable = () => {
  return (
    <div className="mt-10">
      <div className="overflow-x-auto">
        <table className="min-w-full shadow-md rounded-lg">
          <thead>
            <tr className="text-gray-700 text-left text-sm border-b">
              <th className="px-4 py-2 ">Date</th>
              <th className="px-4 py-2 ">From</th>
              <th className="px-4 py-2 ">To</th>
              <th className="px-4 py-2 ">Status</th>
              <th className="px-4 py-2 ">Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b text-sm">
                <td className="px-4 py-2">
                  <span className="flex items-center gap-2">
                    <p className="text-xs text-gray-600">{tx.id}</p>
                    <p>{tx?.date}</p>
                  </span>
                </td>
                <td className="px-4 py-2 ">{tx.from}</td>
                <td className="px-4 py-2 ">{tx.to}</td>
                <td className={`px-4 py-2  `}>
                  <span className="flex items-center gap-2">
                    <p
                      className={`w-2 h-2 rounded-full ${
                        tx.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    ></p>
                    <p>{tx.status}</p>
                  </span>
                </td>
                <td className="px-4 py-2 ">
                  {tx.amount} <br /> {tx.usd}
                </td>
                <td>
                  <HiDotsVertical className="cursor-pointer text-xl" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
