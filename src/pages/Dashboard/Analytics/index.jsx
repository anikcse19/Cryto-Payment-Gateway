import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DashboardLayout from "../../../components/Layout/DashboardLayout";

const data = [
  { date: "03/22", earnings: 2800 },
  { date: "04/22", earnings: 2000 },
  { date: "06/22", earnings: 1500 },
  { date: "08/23", earnings: 400 },
  { date: "10/23", earnings: 4200 },
  { date: "11/23", earnings: 4100 },
  { date: "12/23", earnings: 3200 },
  { date: "01/24", earnings: 2700 },
  { date: "02/24", earnings: 2500 },
  { date: "03/24", earnings: 2100 },
  { date: "04/24", earnings: 1800 },
  { date: "05/24", earnings: 1600 },
  { date: "06/24", earnings: 1400 },
  { date: "07/24", earnings: 1100 },
  { date: "08/24", earnings: 900 },
  { date: "10/24", earnings: 1300 },
  { date: "11/24", earnings: 800 },
  { date: "12/24", earnings: 600 },
  { date: "01/25", earnings: 700 },
  { date: "02/25", earnings: 1000 },
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="">
        <h2 className="text-xl font-semibold mb-2">USD 30,141.52</h2>
        <p className="text-gray-600 text-sm">Earnings</p>
        <h2 className="text-xl font-semibold mt-2">549</h2>
        <p className="text-gray-600 text-sm mb-6">Sales</p>

        <div className="flex gap-2 mb-4">
          <button className="border px-4 py-2 rounded">Start date...</button>
          <button className="border px-4 py-2 rounded">End date...</button>
          <button className="border px-4 py-2 rounded">Completed ▼</button>
          <button className="border px-4 py-2 rounded">All currencies ▼</button>
          <button className="border px-4 py-2 rounded">All checkouts ▼</button>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#17a2b8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
