import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  translate } from '../../../assets/helpers/settings'
import { getCoins, getExchanges } from '../../../store/slice/getCoinsAction'
import { Button } from '../Button'
import s from './../../../../styles/tableCoins.module.scss'
import { TableCoinItem } from './TableCoinItem'
export const Tablecoins = ({language,currency,isThemeDark}) => {
    const [assetsCoins,setAssetsCoins] = useState(1)
    const dispatch = useDispatch()
    useEffect(() => {
		dispatch(getCoins('0'))
	 },[])
     useEffect(() => {
		dispatch(getExchanges())
	 },[])
     const coins = useSelector(state => state.coins.coins)
     const isLoading = useSelector(state => state.coins.isLoading)
        const showMoreHandler = () => {
            dispatch(getCoins(assetsCoins*20))
            setAssetsCoins(++assetsCoins)
        }
  return (
    <div style={isThemeDark ? {backgroundColor:'rgb(37, 37, 37)'} : {backgroundColor:'rgb(236, 239, 241)'}}>
 <div className={isThemeDark ?s.containerDark : s.container  }>
       {coins.length &&  <table>
            <thead>
            <tr>
                <th className={`${s.center_align}`} colSpan={1} >
                    {translate(language,'Rank','Рейтинги')}
                </th>
                <th className={`${s.left_align}`} colSpan={2}>
                    {translate(language,'Name','Имя')}
                </th>
                <th className={`${s.rigth_align}`} colSpan={1}>
                    {translate(language,'Price','Стоимость')}
                </th>
                <th className={`${s.rigth_align}`} colSpan={1}>
                    {translate(language,'Market Cap','Рыночная капитализация')}
                </th>
                <th className={`${s.rigth_align}`} colSpan={1}>
                    {translate(language,'VWAP(24Hr)','VWAP(24hr)')}
                </th>
                <th className={`${s.rigth_align}`} colSpan={1}>
                    {translate(language,'Supply','Доступные ресурсы')}
                </th>
                <th className={`${s.rigth_align}`} colSpan={1}>
                    {translate(language,'Volume(24Hr)','Volume(24Hr)')}
                </th>
                <th className={`${s.rigth_align}`} colSpan={1}>
                    {translate(language,'Change(24Hr)','Change(24Hr)')}
                </th>
            </tr>
                
            </thead>
            <tbody>
                {coins.map(el=>{
                    const key =  Date.now() * Math.random(1,10000)
                    return <TableCoinItem key={key} el={el} currency={currency}/>
                })}
            </tbody>
            <tfoot> 
            </tfoot>
        </table>} 
        <div style={{padding:'2em'}} className={s.button_main}>
             <Button isLoading={isLoading}  action={showMoreHandler}  en='View More' ru='Показать больше'/>
        </div>
       
    </div>
    </div>
   
  )
}
