
import { useRouter } from 'next/router';
import { currencyHelper, roundUpToB_M_T, roundUpToB_M_T_currency } from '../../../../assets/helpers/settings';
import s from './../table.module.scss'
export const TExchangesCoin = ({el,currency}) => {
    const router = useRouter()
  return (
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
  )
}
