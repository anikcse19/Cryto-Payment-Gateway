import DashboardLayout from "../../../components/Layout/DashboardLayout";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="p-6 bg-white rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Cryptocurrency Addresses</h2>
        <p className="text-gray-600 text-sm mb-6">
          Enter the cryptocurrency addresses that will receive payments.
        </p>

        <form className="space-y-4 max-w-3xl">
          {[
            { label: "Bitcoin", placeholder: "Enter Bitcoin address" },
            { label: "Ethereum", placeholder: "Enter Ethereum address" },
            {
              label: "Tether",
              network: "ETH Network",
              placeholder: "Enter Tether (ETH) address",
            },
            {
              label: "Tether",
              network: "TRX Network",
              placeholder: "Enter Tether (TRX) address",
            },
            {
              label: "Tether",
              network: "BSC Network",
              placeholder: "Enter Tether (BSC) address",
            },
            {
              label: "USD Coin",
              network: "ETH Network",
              placeholder: "Enter USD Coin (ETH) address",
            },
            { label: "Litecoin", placeholder: "Enter Litecoin address" },
            { label: "Solana", placeholder: "Enter Solana address" },
            { label: "Monero", placeholder: "Enter Monero address" },
            { label: "XRP", placeholder: "Enter XRP address" },
          ].map(({ label, network, placeholder }, index) => (
            <div key={index}>
              <label className="block font-medium text-gray-700">{label}</label>
              {network && (
                <span className="ml-2 text-xs font-semibold px-2 py-1 bg-gray-200 rounded">
                  {network}
                </span>
              )}
              <input
                type="text"
                placeholder={placeholder}
                className="w-full mt-1 p-2 border rounded focus:ring focus:ring-blue-300"
              />
            </div>
          ))}
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
