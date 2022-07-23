import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { currencyHelper, roundUpToB_M_T, roundUpToB_M_T_currency,changeClassName } from "../../../../assets/helpers/settings";
import { InfoCoin } from "../table-parts/all-info-table-coin/InfoCoin";
import s from './../table.module.scss'

const TCoin = ({el,currency}) => {
    const [isShowCoin, setIsShowCoin] = useState(false);
    function td(style,el){
        return <td className={`${s[style]}`}>{el}</td>
    }
  return (
    <>
    <tr onClick={()=>setIsShowCoin(!isShowCoin)} key={el.rank}>
        {td('center_align',el.rank)}
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
        {td('rigth_align',currencyHelper(currency, el.priceUsd))}
        {td('rigth_align',roundUpToB_M_T(roundUpToB_M_T_currency(currency, el.marketCapUsd)))}
        {td('rigth_align',currencyHelper(currency, el.vwap24Hr))}
        {td('rigth_align',roundUpToB_M_T( el.supply))}
        {td('rigth_align',roundUpToB_M_T(el.volumeUsd24Hr))}
        <td className={`${s.rigth_align} ${changeClassName(el.changePercent24Hr)}`}>
          {Number(el.changePercent24Hr).toFixed(2)} %
        </td>
      </tr>
      {isShowCoin && <tr  className={s.table_info_coin} key={el.id}>
       <InfoCoin el={el} currency={currency}/>
      </tr>}

    </>
  )
}

export default TCoin
