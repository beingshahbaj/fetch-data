import React from "react";

function Dat({ data }) {
  return (
    <table className="container">
      <tbody>
        {data &&
          data.map((data, index) => (
            <tr className="data-box" key={crypto.randomUUID}>
              <td className="name">
                <img src={data.image} alt="" />
                <p className="">{data.name}</p>
              </td>
              <td className="">{data.symbol}</td>
              <td className="">${data.current_price}</td>
              <td className="">{data.fully_diluted_valuation}</td>
              <td
                className={
                  data.price_change_percentage_24h > 0 ? "green" : "red"
                }
              >
                {data.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="">{`Mkt Cap : $${data.market_cap}`}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Dat;

// {
//     "id": "bitcoin",
//     "symbol": "btc",
//     "name": "Bitcoin",
//     "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
//     "current_price": 51011,
//     "market_cap": 1001494926046,
//     "market_cap_rank": 1,
//     "fully_diluted_valuation": 1071052492047,
//     "total_volume": 21163444949,
//     "high_24h": 51251,
//     "low_24h": 50598,
//     "price_change_24h": -39.391727434442146,
//     "price_change_percentage_24h": -0.07716,
//     "market_cap_change_24h": -2162345139.7612305,
//     "market_cap_change_percentage_24h": -0.21545,
//     "circulating_supply": 19636193,
//     "total_supply": 21000000,
//     "max_supply": 21000000,
//     "ath": 69045,
//     "ath_change_percentage": -26.15689,
//     "ath_date": "2021-11-10T14:24:11.849Z",
//     "atl": 67.81,
//     "atl_change_percentage": 75088.84658,
//     "atl_date": "2013-07-06T00:00:00.000Z",
//     "roi": null,
//     "last_updated": "2024-02-24T07:34:26.295Z"
// }
