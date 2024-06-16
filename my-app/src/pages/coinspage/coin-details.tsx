import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { fetchCoinDetails } from "../../features/coinDetails/coinDetailsSlice";

const CoinDetails = () => {
  const { uuid } = useParams();

  const dispatch = useAppDispatch();
  const { coinDetails, loading, error } = useAppSelector(
    (state: RootState) => state.coinDetails
  );

  useEffect(() => {
    if (uuid) {
      dispatch(fetchCoinDetails(uuid));
    }
  }, [dispatch, uuid]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto my-[92px] bg-white shadow-md rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          src={coinDetails.iconUrl}
          alt={`${coinDetails.name} icon`}
          className="w-12 h-12"
        />
        <h1 className="text-3xl font-bold">{coinDetails.name}</h1>
        <span className="text-xl text-gray-600">({coinDetails.symbol})</span>
      </div>
      <p className="mt-4 text-gray-700">{coinDetails.description}</p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Price Information</h2>
        <div className="mt-2 grid grid-cols-2 gap-4">
          <div>
            <span className="font-medium">Current Price:</span>
            <span className="block text-xl font-semibold text-green-600">
              ${parseFloat(coinDetails.price).toFixed(2)}
            </span>
          </div>
          <div>
            <span className="font-medium">All Time High:</span>
            <span className="block text-xl font-semibold text-green-600">
              ${parseFloat(coinDetails.allTimeHigh.price).toFixed(2)}
            </span>
          </div>
          <div>
            <span className="font-medium">Market Cap:</span>
            <span className="block text-xl font-semibold">
              ${coinDetails.marketCap}
            </span>
          </div>
          <div>
            <span className="font-medium">24h Volume:</span>
            <span className="block text-xl font-semibold">
              ${coinDetails["24hVolume"]}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Additional Details</h2>
        <div className="mt-2 grid grid-cols-2 gap-4">
          <div>
            <span className="font-medium">Supply:</span>
            <span className="block text-xl font-semibold">
              {coinDetails.supply.circulating}
            </span>
          </div>
          <div>
            <span className="font-medium">Rank:</span>
            <span className="block text-xl font-semibold">
              {coinDetails.rank}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6 flex space-x-4 flex-wrap py-4">
        {coinDetails.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CoinDetails;
