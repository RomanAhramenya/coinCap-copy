import s from "./../../../../styles/tableCoins.module.scss";
import { translate } from '../../../assets/helpers/settings'
import { useSelector,useDispatch } from "react-redux";
import { getCoins, getExchanges } from "../../../store/slice/getCoinsAction";
import { useEffect, useState } from "react";
import TablelItem from "./TablelItem";
import { Button } from "../../ui/Button";
const Table = ({language,currency,isThemeDark}) => {
    const [currentExhange,setCurrentExchange] = useState(20)
    const [isDisabled,setIsDisabled] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCoins('0'))
     },[])
     useEffect(() => {
        dispatch(getExchanges())
     },[])
     const exchanges = useSelector(state => state.coins.exchanges.data)
     const exchangesFilter = exchanges.slice(0,currentExhange)
     function showMoreHandler() {
        if(currentExhange < exchanges.length)
        setCurrentExchange(currentExhange+20)
        else {
            setIsDisabled(true)
        }
    } 
  return (
    <div className={s.exchanges_container}
      style={
        isThemeDark
          ? { backgroundColor: "rgb(37, 37, 37)" }
          : { backgroundColor: "rgb(236, 239, 241)" }
      }
    >
      <div className={isThemeDark ? s.containerDark : s.container}>
        <table>
          <thead>
            <tr>
              <th className={`${s.center_align}`} colSpan={1}>
                {translate(language, "Rank", "Рейтинги")}
              </th>
              <th className={`${s.left_align}`} colSpan={2}>
                {translate(language, "Name", "Имя")}
              </th>
              <th className={`${s.rigth_align}`} colSpan={1}>
                {translate(language, "Trading Pairs	", "Торговые пары")}
              </th>
              <th className={`${s.rigth_align}`} colSpan={1}>
                {translate(language, "Top Pair", "Топ пара")}
              </th>
              <th className={`${s.rigth_align}`} colSpan={1}>
                {translate(language, "Volume (24Hr)	", "Volume (24Hr)")}
              </th>
              <th className={`${s.rigth_align}`} colSpan={1}>
                {translate(language, "Total (%)	", "Total (%)")}
              </th>
              <th className={`${s.center_align}`} colSpan={1}>
                {translate(language, "Status", "Status")}
              </th>
            </tr>
          </thead>
          <tbody>
          {exchangesFilter.map(el=>{
                       return <TablelItem el={el} currency={currency}/>
                   })}
          </tbody>
          <tfoot></tfoot>
        </table>
        <div className={s.button_main}>
                <Button disabled={isDisabled}  action={showMoreHandler}  en='View More' ru='Показать больше'/>
           </div>
      </div>
    </div>
  )
}

export default Table
