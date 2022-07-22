import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import { currencyHelper, roundUpToB_M_T, roundUpToB_M_T_currency,changeClassName } from '../../../../assets/helpers/settings';
import { InfoCoin } from './all-info-table-coin/InfoCoin';
import s from './../table.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router';

export const TBody = ({currency,el,variantTable}) => {
    const [isShowCoin, setIsShowCoin] = useState(false);
    const router = useRouter()
    function td(style,el){
        return <td className={`${s[style]}`}>{el}</td>
    }
  return (
    <>
    {variantTable === 'coins' && <>
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

    </>}
          {variantTable === 'exchangeCoins' && <>
          <tr onClick={() => router.push(`/exchanges/${el.exchangeId.toLowerCase()}`)}>
        <td className={`${s.left_align}`} colSpan={2}>
        
            {el.exchangeId}
          
        </td>
        <td className={`${s.rigth_align}`}>
          
            {`${el.baseSymbol}/${el.quoteSymbol}`}
       
        </td>
        <td className={`${s.rigth_align}`}>
     
            {currencyHelper(currency, el.priceUsd)}
         
        </td>
        <td className={`${s.rigth_align}`}>
     
            {roundUpToB_M_T(roundUpToB_M_T_currency(currency,el.volumeUsd24Hr))}
        
        </td>
        <td className={`${s.rigth_align}`}>
         
             {Number(el.volumePercent).toFixed(2)} %
        
        </td>
      
        <td  className={`${s.rigth_align}`}>
          
            
              {" "}
              <div  className={`${s.rigth_align}`}
                style={{
                  width: "1em",
                  height: "1em",
                  background: "rgb(24, 198, 131)",
                  borderRadius: "100%",
                  margin: "0 auto",
                }}
              ></div>
          
        </td>
      </tr>
          </>}
    </>
  )
}
