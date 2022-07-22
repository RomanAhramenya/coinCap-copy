import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoins, getExchanges } from '../../../store/slice/getCoinsAction'
import { Button } from '../Button'
import { TBody } from './table-parts/TBody'
import { THead } from './table-parts/THead'
import s from './table.module.scss'
const Table = ({disabled=false,variantTable,arr,buttonAction,tr,showMoreHandler}) => {
    const settings = useSelector(state => state.settings)
    const {isThemeDark,language,currency} = settings
   
 
       
  return (
    <div style={isThemeDark ? {backgroundColor:'rgb(37, 37, 37)'} : {backgroundColor:'rgb(236, 239, 241)'}}>
    <div className={`${s[variantTable]} ${isThemeDark ? s.containerDark : s.container}  `}>
            <table >
              <THead  arr={arr}  language={language}/>
               <tbody>
                   {tr.map(el=>{
                       const key =  Date.now() * Math.random(1,10000)
                       return <TBody variantTable={variantTable} arr={arr} key={key} el={el} currency={currency}/>
                   })}
               </tbody>
               <tfoot> 
               </tfoot>
           </table>
           <div  className={s.button_main}>
                <Button disabled={disabled} isLoading={buttonAction}  action={showMoreHandler}  en='View More' ru='Показать больше'/>
           </div>
          
       </div>
       </div>
  )
}

export default Table
