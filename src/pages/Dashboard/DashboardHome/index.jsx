import { FaCloudDownloadAlt } from "react-icons/fa";
import DashboardLayout from "../../../components/Layout/DashboardLayout";
import TransactionTable from "../../../components/Table/TransactionTable";
import { GiSettingsKnobs } from "react-icons/gi";

const DashboardHome = () => {
  return (
    <DashboardLayout>
      {/* topbar */}
      <div className="flex items-center gap-3 my-5">
        {/* search box */}
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Search all transactions"
            className="w-full p-2 text-sm border-2 border-gray-300 rounded-md outline-none focus:border-[#2BCBD7]"
          />
        </div>
        {/* action button */}
        <div className="flex items-center gap-5 px-5">
          <FaCloudDownloadAlt className="cursor-pointer text-xl" />
          <GiSettingsKnobs className="cursor-pointer text-xl" />
        </div>
      </div>

      <TransactionTable />
    </DashboardLayout>
  );
};

export default DashboardHome;
