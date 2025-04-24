import React from "react";
import CryptoTable from "./components/CryptoTable";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <h1 className="text-2xl font-bold p-4">Crypto Market Overview</h1>
      <CryptoTable />
    </div>
  );
};

export default App;