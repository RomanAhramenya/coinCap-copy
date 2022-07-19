import React from "react";
import { useSelector } from "react-redux";
import { FooterTable } from "./FooterTable";
import HeaderAssetsCoin from "./HeaderAssetsCoin";
import { MiddleAssetsCoin } from "./MiddleAssetsCoin";

export const AssetsCoin = ({ coin, history,markets }) => {
  const {
    rank,
    name,
    symbol,
    priceUsd,
    changePercent24Hr,
    marketCapUsd,
    volumeUsd24Hr,
    supply,
  } = coin.data;
  const settings = useSelector((state) => state.settings);
  return (
    <div>
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
      <MiddleAssetsCoin
        coin={coin.data}
        history={history}
        settings={settings}
      />
      <FooterTable settings={settings} markets={markets.data}/>
    </div>
  );
};
