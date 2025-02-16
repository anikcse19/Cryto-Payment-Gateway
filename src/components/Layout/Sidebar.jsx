import { Link, useLocation } from "react-router-dom";
import { GrTransaction } from "react-icons/gr";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdBarChart } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";

const menuItems = [
  {
    id: 1,
    title: "Transaction",
    icon: <GrTransaction />,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Checkouts",
    icon: <IoBagCheckOutline />,
    link: "/dashboard/checkouts",
  },
  {
    id: 3,
    title: "Balances",
    icon: <MdBarChart />,
    link: "/dashboard/balances",
  },
  {
    id: 4,
    title: "Settings",
    icon: <IoBagCheckOutline />,
    link: "/dashboard/settings",
  },
  {
    id: 5,
    title: "Analytics",
    icon: <IoBagCheckOutline />,
    link: "/dashboard/analytics",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="py-3  flex flex-col min-h-screen">
      {/* site logo */}
      <Link className="flex justify-center mt-5 px-5" to="/">
        <img src="/images/cryptoPay_logo.png" alt="" width={150} height={150} />
      </Link>
      {/* menus */}
      <div className="flex flex-col justify-between flex-grow">
        {/* menu */}
        <div className="flex flex-col gap-2 mt-10">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`flex items-center justify-between px-8 py-3 hover:text-[#2BCBD7] hover:border-r-2 hover:border-[#2BCBD7] transition-all duration-300 ease-in ${
                pathname === item.link
                  ? "text-[#2BCBD7] border-r-2 border-[#2BCBD7]"
                  : "text-black"
              } font-semibold`}
            >
              <div className="flex items-center gap-4">
                {item.icon}
                <p className="">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
        {/* footer */}
        <div className="flex flex-col gap-4 px-5">
          <div className="flex justify-center">
            <button className="bg-[#2BCBD7] px-5 py-2 text-white font-medium rounded-full">
              Request a Payment
            </button>
          </div>
          <div className="flex justify-between items-center mt-2">
            <button className="font-semibold">Logut</button>
            <p>1.2.7</p>
            <CiCircleQuestion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
