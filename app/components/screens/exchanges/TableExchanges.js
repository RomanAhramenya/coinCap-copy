
import { useSelector,useDispatch } from "react-redux";
import { getCoins, getExchanges } from "../../../store/slice/getCoinsAction";
import { useEffect, useState } from "react";
import Table from "../../ui/table/Table";
const TableExchanges = ({language,currency,isThemeDark}) => {
  const coinsTableValues = [
    {id:1,en:'Rank',ru:'Ранк',style:'center_align',colSpan:1},
    {id:2,en:'Name',ru:'Имя',style:'left_align',colSpan:2},
    {id:3,en:'Trading Pairs	',ru:'Пары',style:'rigth_align',colSpan:1},
    {id:4,en:'Top Pair',ru:'Топ пара',style:'rigth_align',colSpan:1},
    {id:5,en:'Volume(24hr)',ru:'Volume(24hr',style:'rigth_align',colSpan:1},
    {id:6,en:'Total (%)	',ru:'Total (%)	',style:'rigth_align',colSpan:1},
    {id:7,en:'Status',ru:'Статус',style:'center_align',colSpan:1},
  ]
    const [currentExhange,setCurrentExchange] = useState(20)
    const [isDisabled,setIsDisabled] = useState(false)
    const dispatch = useDispatch()
    const data = useSelector(state => state.coins.coins)
    useEffect(() => {
      if(data.length === 0) {
         dispatch(getCoins('0'))
      }
       
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
  return  <Table arr={coinsTableValues} disabled={isDisabled} showMoreHandler={showMoreHandler} tr={exchangesFilter} buttonAction={false} variantTable='exchanges'/>
     
    
   
  
}

export default TableExchanges
