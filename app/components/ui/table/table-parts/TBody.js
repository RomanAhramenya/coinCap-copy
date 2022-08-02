import { useRouter } from "next/router";
import TCoin from "../table-vatiant/TCoin";
import { TExchange } from "../table-vatiant/TExchange";
import { TExchangesCoin } from "../table-vatiant/TExchangesCoin";

export const TBody = ({ currency, el, variantTable }) => {
  const router = useRouter();

  return (
    <>
      {variantTable === "coins" && <TCoin el={el} currency={currency} />}
      {variantTable === "exchangeCoins" && <TExchangesCoin el={el} currency={currency}/>}
      {variantTable === "exchanges" && <TExchange el={el} currency={currency}/>}
    </>
  );
};
