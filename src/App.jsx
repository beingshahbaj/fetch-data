import { useEffect, useState } from "react";
import "./App.css";
import Dat from "./Dat";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );

      setData(response.data);
    } catch {
      (err) => {
        setData(err);
        console.log(err);
      };
    }
  };
  return (
    <>
      <h1>Cryptocurrency Market Overview</h1>
      <Dat data={data} />
    </>
  );
}

export default App;
