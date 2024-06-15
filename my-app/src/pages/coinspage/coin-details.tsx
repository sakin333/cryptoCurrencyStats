import React, { useEffect } from "react";
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

  return (
    <div>
      <h1>{coinDetails.name}</h1>
      <p>Symbol: {coinDetails.symbol}</p>
    </div>
  );
};

export default CoinDetails;
