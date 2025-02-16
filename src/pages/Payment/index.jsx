import { Link, useNavigate, useParams } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { IoCopyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

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

const Payment = () => {
  const [time, setTime] = useState(3540); // 59 minutes in seconds

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };
  const coinIcon = coinInfo.find((coin) => coin.symbol == id).icon;
  return (
    <div>
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
          className="bg-white pt-6 rounded-lg mt-6"
        >
          {/* block 1 */}
          <div className="flex items-center justify-between p-6 border-b-2 border-gray-300">
            <span className="text-slate-800 font-semibold">Send Payment</span>
            <div className="flex items-center gap-4">
              <p>{formatTime(time)}</p>
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 border-2 border-gray-300 px-4 py-1 rounded-full text-gray-600"
              >
                <TiArrowBackOutline />
                <p>Back</p>
              </button>
            </div>
          </div>
          {/* block 2 */}
          <div className="flex items-center justify-between p-6 border-b-2 border-gray-300">
            <div>
              <img src="/images/qrCode.png" alt="" />
            </div>
            <div className="flex items-center gap-3">
              <img width={22} height={22} src={coinIcon} alt="" />
              <p className="text-gray-600">Only send {id} to this address</p>
            </div>
          </div>
          {/* block 3 */}
          <div className="flex items-center justify-between p-6 border-b-2 border-gray-300">
            <div className="flex flex-col gap-1">
              <p className="text-gray-600">{id} Address</p>
              <p className="font-semibold text-slate-800">
                0xcc1486157C47c4B76fe097fDD48c3CEDB20d01B6
              </p>
            </div>
            <div>
              <IoCopyOutline className="cursor-pointer" />
            </div>
          </div>
          {/* block 4 */}
          <div className="flex items-center justify-between p-6">
            <div className="flex flex-col gap-1">
              <p className="text-gray-600">Total Amount</p>
              <span className="font-semibold text-slate-800">
                0.2312312112 {id}{" "}
                <p className="text-gray-600 text-xs pl-2 inline font-normal">
                  2 USD
                </p>
              </span>
            </div>
            <div>
              <IoCopyOutline className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
