import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoins, getExchanges } from "../../../store/slice/getCoinsAction";
import Table from "../../ui/table/Table";

export const TableHome = () => {
    const [assetsCoins,setAssetsCoins] = useState(1)
    const coins = useSelector(state => state.coins.coins)
    const isLoading = useSelector(state => state.coins.isLoading)
    const coinsTableValues = [
      {id:1,en:'Rank',ru:'Рейтинг',style:'center_align',colSpan:1},
      {id:2,en:'Name',ru:'Имя',style:'left_align',colSpan:2},
      {id:3,en:'Price',ru:'Стоимость',style:'rigth_align',colSpan:1},
      {id:4,en:'Market Cap',ru:'Рыночная капитализация',style:'rigth_align',colSpan:1},
      {id:5,en:'VWAP(24h)',ru:'VWAP(24hr)',style:'rigth_align',colSpan:1},
      {id:6,en:'Supply',ru:'Доступные ресурсы',style:'rigth_align',colSpan:1},
      {id:7,en:'Volume(24hr)',ru:'Volume(24Hr)',style:'rigth_align',colSpan:1},
      {id:8,en:'Change(24hr)',ru:'Change(24Hr)',style:'rigth_align',colSpan:1},
    ]
    const dispatch = useDispatch()
    useEffect(() => {
        
            dispatch(getCoins('0'))
        
    
   },[])
     useEffect(() => {
       
    dispatch(getExchanges())
        
   },[])
   const showMoreHandler = () => {
    dispatch(getCoins(assetsCoins*20))
    setAssetsCoins(++assetsCoins)
  }
  return  <Table showMoreHandler={showMoreHandler} tr={coins} buttonAction={isLoading} arr={coinsTableValues} variantTable='coins' />
}
