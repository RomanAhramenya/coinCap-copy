import { useState } from 'react'
import { Button } from '../../ui/Button'
import { Grafic } from '../../ui/grafic/Grafic'
import s from './../../../../styles/assetsCoin.module.scss'
import { ButtonGrafic } from './ButtonGrafic'
import { SwapAssetsCoin } from './SwapAssetsCoin'
export const MiddleAssetsCoin = ({coin,history,settings}) => {
    let {isThemeDark,language,currency} = settings
    const [intervalGrafic,setIntervalGrafic] = useState('h1')
    const [day,setDay] = useState('h1')
  return (
    
    <div className={isThemeDark ? s.middleDark : s.middle}>
        <div className={s.middle_container}>
            <div className={s.grafic}>
                 <Grafic el={coin} interval={intervalGrafic} day={day}/>
                <div className={s.listitem_grafic}>
                    <ButtonGrafic lang={language} en='1D' ru='1Д'  action={setIntervalGrafic} interval='h1' day='h1' setDay={setDay} active={day}/>
                    <ButtonGrafic lang={language} en='1W' ru='1Н'  action={setIntervalGrafic} interval='d1' day='w1' setDay={setDay} active={day}/>
                    <ButtonGrafic lang={language} en='1M' ru='1М'  action={setIntervalGrafic} interval='d1' day='d1' setDay={setDay} active={day}/>
                    <ButtonGrafic lang={language} en='3M' ru='3М'  action={setIntervalGrafic} interval='d1' day='m3' setDay={setDay} active={day}/>
                    <ButtonGrafic lang={language} en='6M' ru='6М'  action={setIntervalGrafic} interval='d1' day='m6' setDay={setDay} active={day}/>
                    <ButtonGrafic lang={language} en='1Y' ru='1Г'  action={setIntervalGrafic} interval='d1' day='1y' setDay={setDay} active={day}/>
                </div>
            </div>
            <SwapAssetsCoin/>
        </div>
    </div>
  )
}
