import {  roundUpToB_M_T, roundUpToB_M_T_currency } from "../../../assets/helpers/settings";
import s from "./../../../../styles/tableCoins.module.scss";
import { useRouter } from 'next/router'
const TablelItem = ({currency,el}) => {
    const router = useRouter()
  return (
    <>
      <tr onClick={() => router.push(`/exchanges/${el.exchangeId.toLowerCase()}`)} key={el.rank}>
        <td className={`${s.center_align}`}>{el.rank}</td>
        <td className={`${s.left_align}`}  colSpan={2}>
            {el.name}
        </td>
        <td className={`${s.rigth_align}`}>
          { el.tradingPairs}
        </td>
        <td className={`${s.rigth_align}`}>
        ETH/BTC
        </td>
        <td className={`${s.rigth_align}`}>
          {roundUpToB_M_T(roundUpToB_M_T_currency(currency, el.volumeUsd))}
        </td>
        <td className={`${s.rigth_align}`}>{Number(el.percentTotalVolume).toFixed(2)} %</td>
        <td className={`${s.rigth_align}`}>
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
      {/* {isShowCoin && <tr  className={s.table_info_coin} key={el.id}>
       <TableAllInfoCoin el={el} currency={currency}/>
      </tr>} */}
    </>
  )
}

export default TablelItem
