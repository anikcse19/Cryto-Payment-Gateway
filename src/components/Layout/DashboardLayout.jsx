import Sidebar from "./Sidebar";

/* eslint-disable react/prop-types */
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex w-full h-full relative">
      <div className="w-[250px] min-h-screen fixed top-0 left-0 border-r border-gray-200">
        <Sidebar />
      </div>
      <div className="flex-grow p-5 w-full ml-[250px]">
        {/* children */}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
