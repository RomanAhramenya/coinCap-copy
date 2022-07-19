import Link from "next/link";
import { currencyHelper } from "../../../assets/helpers/settings";
import s from "./../../../../styles/tableCoins.module.scss";

const FooterTableItem = ({ market, currency }) => {

  return (
    <>
      <tr>
        <td className={`${s.left_align}`} colSpan={2}>
          <Link href={"/exchanges/[id]"} as={`/exchanges/${market.exchangeId}`}>
            <a>{market.exchangeId}</a>
          </Link>
        </td>
        <td className={`${s.rigth_align}`}>
          <Link href={"/exchanges/[id]"} as={`/exchanges/${market.exchangeId}`}>
            <a>{`${market.baseSymbol}/${market.quoteSymbol}`}</a>
          </Link>
        </td>
        <td className={`${s.rigth_align}`}>
          <Link href={"/exchanges/[id]"} as={`/exchanges/${market.exchangeId}`}>
            <a>{currencyHelper(currency, market.priceUsd)}</a>
          </Link>
        </td>
        <td className={`${s.rigth_align}`}>
          <Link href={"/exchanges/[id]"} as={`/exchanges/${market.exchangeId}`}>
            <a> {currencyHelper(currency,market.volumeUsd24Hr)}</a>
          </Link>
        </td>
        <td className={`${s.rigth_align}`}>
          <Link href={"/exchanges/[id]"} as={`/exchanges/${market.exchangeId}`}>
            <a> {Number(market.volumePercent).toFixed(2)} %</a>
          </Link>
        </td>
      
        <td className={`${s.rigth_align}`}>
          <Link href={"/exchanges/[id]"} as={`/exchanges/${market.exchangeId}`}>
            <a>
              {" "}
              <div
                style={{
                  width: "1em",
                  height: "1em",
                  background: "rgb(24, 198, 131)",
                  borderRadius: "100%",
                  margin: "0 auto",
                }}
              ></div>
            </a>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default FooterTableItem;
