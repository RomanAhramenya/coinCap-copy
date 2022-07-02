import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  currencyHelper,
  roundUpToB_M_T,
  roundUpToB_M_T_currency,
  changeClassName
} from "../../../assets/helpers/settings";
import s from "./../../../../styles/tableCoins.module.scss";
export const TableCoinItem = ({ el, currency }) => {
  const [isShowCoin, setIsShowCoin] = useState(false);
  return (
    // <Link href={'/assets/[id]'} as={`/assets/${el.id}`} >
    <>
      <tr onClick={()=>setIsShowCoin(!isShowCoin)} key={el.rank}>
        <td className={`${s.center_align}`}>{el.rank}</td>
        <td className={`${s.left_align}`}  colSpan={2}>
        <div className={s.flex}>
            <div className={s.iconCoin}>
             <Image width={30} height={30}  src={`https://assets.coincap.io/assets/icons/${el.symbol.toLowerCase()}@2x.png`} alt={el.name} />
        </div>
        <Link href={'/assets/[id]'} as={`/assets/${el.id}`} >
        <a className={s.nameCoin}>
              <div>
              {el.name}  
            </div>
            <div>{el.symbol}</div>
        </a>
          
        </Link>
        </div>
     
          
        </td>
        <td className={`${s.rigth_align}`}>
          {currencyHelper(currency, el.priceUsd)}
        </td>
        <td className={`${s.rigth_align}`}>
          {roundUpToB_M_T(roundUpToB_M_T_currency(currency, el.marketCapUsd))}
        </td>
        <td className={`${s.rigth_align}`}>
          {currencyHelper(currency, el.vwap24Hr)}
        </td>
        <td className={`${s.rigth_align}`}>{roundUpToB_M_T(el.supply)}</td>
        <td className={`${s.rigth_align}`}>
          {roundUpToB_M_T(el.volumeUsd24Hr)}
        </td>
        <td className={`${s.rigth_align} ${changeClassName(el.changePercent24Hr)}`}>
          {Number(el.changePercent24Hr).toFixed(2)} %
        </td>
      </tr>
      {isShowCoin && <tr>
        <td colSpan={9}>
                {el.name}
        </td>
      </tr>}
    </>

    //  </Link>
  );
};
