import React from "react";
import { useSelector } from "react-redux";
import HeaderAssetsCoin from "./HeaderAssetsCoin";

export const AssetsCoin = ({ coin, history }) => {
  const { rank, name, symbol, priceUsd, changePercent24Hr,marketCapUsd,volumeUsd24Hr,supply } = coin.data;
  const settings = useSelector((state) => state.settings);
  return (
    <>
      <HeaderAssetsCoin
        rank={rank}
        changePercent24Hr={changePercent24Hr}
        priceUsd={priceUsd}
        name={name}
        symbol={symbol}
        marketCapUsd={marketCapUsd}
        history={history}
        settings={settings}
        volumeUsd24Hr={volumeUsd24Hr}
        supply={supply}
      />
    </>
  );
};
