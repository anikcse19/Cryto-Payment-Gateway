import DashboardLayout from "../../../components/Layout/DashboardLayout";

const services = [
  { id: 2, name: "Cloud Storage Premium", price: 99, currency: "CNY" },
  { id: 3, name: "Boxcoin Shop Demo", price: 99, currency: "USD" },
  {
    id: 4,
    name: "Server Repair and Virus Rem...",
    price: 199,
    currency: "USD",
  },
  { id: 5, name: "Virtual Server Installation", price: 1999, currency: "CNY" },
  { id: 6, name: "Email Server Installation", price: 59, currency: "RUB" },
  { id: 7, name: "White Label Option", price: 19, currency: "USD" },
];

const Checkouts = () => {
  return (
    <DashboardLayout>
      <div className="w-1/2 rounded-lg p-4">
        <table className="w-full">
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-b">
                <td className="py-3 text-gray-700">{service.id}</td>
                <td className="py-3 text-gray-900">{service.name}</td>
                <td className="py-3 text-gray-600 text-right">
                  {service.currency} {service.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Checkouts;
