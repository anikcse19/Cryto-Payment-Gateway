import DashboardLayout from "../../../components/Layout/DashboardLayout";

const balances = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    amount: 0.02344404,
    usd: 2255.97,
    icon: "/images/icon/icon_btc.svg",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    amount: 0.14509332572100728,
    usd: 384.89,
    icon: "/images/icon/ethereum-icon.svg",
  },
  {
    name: "Tether",
    symbol: "USDT",
    amount: 12.989132,
    usd: 12.99,
    network: "ETH network",
    icon: "/images/icon/tether_icon.svg",
  },
  {
    name: "Tether",
    symbol: "USDT",
    amount: 0,
    usd: 0,
    network: "TRON network",
    icon: "/images/icon/tether_icon.svg",
  },
  {
    name: "Tether",
    symbol: "USDT",
    amount: 0,
    usd: 0,
    network: "BSC network",
    icon: "/images/icon/tether_icon.svg",
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    amount: 11.959946,
    usd: 11.96,
    network: "ETH network",
    icon: "/images/icon/usdCoin_icon.svg",
  },
  {
    name: "Litecoin",
    symbol: "LTC",
    amount: 0,
    usd: 0,
    icon: "/images/icon/liteCoin_icon.svg",
  },
  {
    name: "Solana",
    symbol: "SOL",
    amount: 0,
    usd: 0,
    icon: "/images/icon/solana_icon.svg",
  },
];

const Balances = () => {
  const totalUSD = balances.reduce((sum, item) => sum + item.usd, 0).toFixed(2);

  return (
    <DashboardLayout>
      <div className="p-6 w-full">
        <h2 className="text-2xl font-semibold text-gray-800">USD {totalUSD}</h2>
        <p className="text-sm text-gray-500">Available balance</p>

        <table className="w-full mt-4">
          <thead className="">
            <tr className="text-left text-gray-600 text-sm border-b">
              <th className="py-2">Crypto currency</th>
              <th className="py-2">Balance</th>
            </tr>
          </thead>
          <tbody>
            {balances.map((crypto, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 flex items-center space-x-2">
                  <img src={crypto.icon} width={22} height={22} />
                  <span className="font-medium">{crypto.name}</span>
                  {crypto.network && (
                    <span className="ml-2 text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-full">
                      {crypto.network}
                    </span>
                  )}
                </td>
                <td className="py-3 text-left">
                  <div className="font-medium">
                    {crypto.amount} {crypto.symbol}
                  </div>
                  <div className="text-sm text-gray-500">USD {crypto.usd}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Balances;
