import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePrices } from "../redux/CryptoSlice";
import { simulatePriceChange } from "../utils/mockWebSocket";

const formatNumber = (num) =>
  num.toLocaleString("en-US", { maximumFractionDigits: 2 });

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const updates = simulatePriceChange(assets);
      dispatch(updatePrices(updates));
    }, 1500);
    return () => clearInterval(interval);
  }, [dispatch, assets]);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead>
          <tr className="border-b font-semibold text-gray-700">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">1h %</th>
            <th className="px-4 py-2">24h %</th>
            <th className="px-4 py-2">7d %</th>
            <th className="px-4 py-2">Market Cap</th>
            <th className="px-4 py-2">Volume(24h)</th>
            <th className="px-4 py-2">Circulating Supply</th>
            <th className="px-4 py-2">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="flex items-center gap-2 px-4 py-2">
                <img src={asset.logo} alt={asset.symbol} className="w-6 h-6" />
                <div>
                  <div className="font-semibold">{asset.name}</div>
                  <div className="text-xs text-gray-500">{asset.symbol}</div>
                </div>
              </td>
              <td className="px-4 py-2 font-medium">${formatNumber(asset.price)}</td>
              <td className={`px-4 py-2 ${asset.change1h >= 0 ? "text-green-600" : "text-red-500"}`}>
                {asset.change1h}%
              </td>
              <td className={`px-4 py-2 ${asset.change24h >= 0 ? "text-green-600" : "text-red-500"}`}>
                {asset.change24h}%
              </td>
              <td className={`px-4 py-2 ${asset.change7d >= 0 ? "text-green-600" : "text-red-500"}`}>
                {asset.change7d}%
              </td>
              <td className="px-4 py-2">${formatNumber(asset.marketCap)}</td>
              <td className="px-4 py-2">${formatNumber(asset.volume24h)}</td>
              <td className="px-4 py-2">{asset.circulatingSupply}</td>
              <td className="px-4 py-2">
                <img src={asset.chart} alt="7d trend" className="h-8" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;