import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const coinInfo = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    icon: "/images/icon/icon_btc.svg",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    icon: "/images/icon/ethereum-icon.svg",
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    support: "ETH Network",
    icon: "/images/icon/tether_icon.svg",
  },
  {
    id: 4,
    name: "USD Coin",
    symbol: "USDC",
    support: "ETH Network",
    icon: "/images/icon/usdCoin_icon.svg",
  },
  {
    id: 5,
    name: "Shiba Inu",
    symbol: "SHIB",
    support: "ETH Network",
    icon: "/images/icon/shibaInu_icon.svg",
  },
  {
    id: 6,
    name: "Basic Attention Token",
    symbol: "BAT",
    support: "ETH Network",
    icon: "/images/icon/basicAttention_icon.svg",
  },
  {
    id: 7,
    name: "Dogecoin",
    symbol: "DOGE",
    icon: "/images/icon/dogeCoin_icon.svg",
  },
  {
    id: 8,
    name: "Algorand",
    symbol: "ALGO",
    icon: "/images/icon/algorand_icon.svg",
  },
];

const CheckOut = () => {
  const [isViewAllCoin, setIsViewAllCoin] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="my-16">
        <Link to="/" className="w-full flex justify-center">
          <img
            src="/images/cryptoPay_logo.png"
            alt=""
            width={200}
            height={200}
          />
        </Link>

        <div
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
          className="bg-white py-6 rounded-lg mt-6"
        >
          <p className="text-center text-xl border-b border-blue-50 pb-2">
            Checkout
          </p>
          <div className="flex flex-col items-center mt-6 gap-y-6">
            <p className="text-slate-800 font-semibold">USD</p>
            <p>Contact Information</p>
          </div>
          {/* contact form */}
          <div className="mt-8  w-full px-16">
            <div className="flex flex-col gap-y-3">
              {/* first name */}
              <div className="flex flex-row border-2 border-gray-600">
                <div className="w-[40%] bg-gray-300 border-r-2 border-gray-600">
                  <p className="p-2">First Name</p>
                </div>
                <div className="w-[60%]">
                  <input type="text" className="p-2 w-full outline-none" />
                </div>
              </div>
              {/* last name */}
              <div className="flex flex-row border-2 border-gray-600">
                <div className="w-[40%] bg-gray-300 border-r-2 border-gray-600">
                  <p className="p-2">Last Name</p>
                </div>
                <div className="w-[60%]">
                  <input type="text" className="p-2 w-full outline-none" />
                </div>
              </div>
              {/* email */}
              <div className="flex flex-row border-2 border-gray-600">
                <div className="w-[40%] bg-gray-300 border-r-2 border-gray-600">
                  <p className="p-2">Email</p>
                </div>
                <div className="w-[60%]">
                  <input type="text" className="p-2 w-full outline-none" />
                </div>
              </div>
            </div>
            <p className="my-3 text-right underline">Generate Invoice?</p>
          </div>

          {/* all coins */}
          <div
            className={`mt-8  w-full px-16 ${
              isViewAllCoin ? "h-fit" : "h-[320px]"
            } overflow-hidden relative`}
          >
            <div className="flex flex-col gap-y-3">
              {coinInfo.map((coin) => (
                <div
                  className="rounded-full p-2 border border-gray-500 flex justify-between items-center cursor-pointer hover:border-2 hover:border-[#2BCBD7] group"
                  key={coin.id}
                  onClick={() => {
                    navigate(`/payment/${coin.symbol}`);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={coin?.icon}
                      alt=""
                      width={20}
                      height={18}
                      className="object-fill w-[20px] h-[20px]"
                    />
                    <p className="font-semibold text-sm md:text-base">
                      {coin.name}
                    </p>
                  </div>
                  <div className="pr-2 w-10 text-sm self-start text-left font-medium text-slate-600 group-hover:text-[#2BCBD7]">
                    {coin?.symbol}
                  </div>
                </div>
              ))}
            </div>
            {!isViewAllCoin && (
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            )}
          </div>
          {!isViewAllCoin && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setIsViewAllCoin(!isViewAllCoin)}
                className="py-1 flex items-center gap-2"
              >
                <MdKeyboardArrowDown className="text-xl" />{" "}
                <p>All Crypto Currencies</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
