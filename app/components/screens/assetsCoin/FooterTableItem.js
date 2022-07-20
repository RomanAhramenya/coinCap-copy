import Link from "next/link";
import { currencyHelper, roundUpToB_M_T, roundUpToB_M_T_currency } from "../../../assets/helpers/settings";
import s from "./../../../../styles/tableCoins.module.scss";
import { useRouter } from 'next/router'
const FooterTableItem = ({ market, currency }) => {
  const router = useRouter()

  return (
    <>
      <tr onClick={() => router.push(`/exchanges/${market.exchangeId.toLowerCase()}`)}>
        <td className={`${s.left_align}`} colSpan={2}>
        
            {market.exchangeId}
          
        </td>
        <td className={`${s.rigth_align}`}>
          
            {`${market.baseSymbol}/${market.quoteSymbol}`}
       
        </td>
        <td className={`${s.rigth_align}`}>
     
            {currencyHelper(currency, market.priceUsd)}
         
        </td>
        <td className={`${s.rigth_align}`}>
     
            {roundUpToB_M_T(roundUpToB_M_T_currency(currency,market.volumeUsd24Hr))}
        
        </td>
        <td className={`${s.rigth_align}`}>
         
             {Number(market.volumePercent).toFixed(2)} %
        
        </td>
      
        <td className={`${s.rigth_align}`}>
          
            
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
          
        </td>
      </tr>
    </>
  );
};

export default FooterTableItem;
