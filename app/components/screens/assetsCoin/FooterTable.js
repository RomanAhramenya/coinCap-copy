import { useState } from 'react'
import { translate } from '../../../assets/helpers/settings'
import { Button } from '../../ui/Button'
import s from './../../../../styles/tableCoins.module.scss'
import FooterTableItem from './FooterTableItem'
export const FooterTable = ({markets,settings}) => {
    const [currentMarkets,setCurrentmarkets] = useState(20)
    const [isDisabled,setIsDisabled] = useState(false)
    const {language,isThemeDark,currency} = settings
    const filter = markets.filter(market => market.volumePercent !== null)
    const marketsFilter = filter.slice(0,currentMarkets)


    function showMoreHandler() {
        if(currentMarkets < filter.length)
        setCurrentmarkets(currentMarkets+20)
        else {
            setIsDisabled(true)
        }
    } 
  return (
    <div className={s.container_footer_markets_table}>
          <div style={isThemeDark ? {backgroundColor:'rgb(37, 37, 37)'} : {backgroundColor:'rgb(236, 239, 241)'}}>
    <div className={isThemeDark ?s.containerDark : s.container  }>
          <table>
               <thead>
               <tr>
                   <th className={`${s.left_align}`} colSpan={2} >
                       {translate(language,'Exchange','Обменники')}
                   </th>
                   <th className={`${s.rigth_align}`} colSpan={1}>
                       {translate(language,'Pair','Пара')}
                   </th>
                   <th className={`${s.rigth_align}`} colSpan={1}>
                       {translate(language,'Price','Стоимость')}
                   </th>
                   <th className={`${s.rigth_align}`} colSpan={1}>
                       {translate(language,'Volume(24hr)','Рыночная капитализация')}
                   </th>
                   <th className={`${s.rigth_align}`} colSpan={1}>
                       {translate(language,'Volume(%)','VWAP(24hr)')}
                   </th>
                   <th className={`${s.center_align}`} colSpan={1}>
                       {translate(language,'Status','Статус')}
                   </th>
               </tr>
                   
               </thead>
               <tbody>
                   {marketsFilter.map(el=>{
                    const key =  Date.now() * Math.random(1,10000)
                       return <FooterTableItem key={key} market={el} currency={currency}/>
                   })}
               </tbody>
               <tfoot> 
               </tfoot>
           </table>
           <div className={s.button_main}>
                <Button disabled={isDisabled}  action={showMoreHandler}  en='View More' ru='Показать больше'/>
           </div>
          
       </div>
       </div>
    </div>
  
  )
}
