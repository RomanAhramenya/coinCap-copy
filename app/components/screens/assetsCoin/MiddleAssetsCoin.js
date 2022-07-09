import { useState } from 'react'
import { Button } from '../../ui/Button'
import { Grafic } from '../../ui/grafic/Grafic'
import s from './../../../../styles/assetsCoin.module.scss'
import { ButtonGrafic } from './ButtonGrafic'
import { SwapAssetsCoin } from './SwapAssetsCoin'
export const MiddleAssetsCoin = ({coin,history,settings}) => {
    let {isThemeDark,language,currency} = settings
    const [intervalGrafic,setIntervalGrafic] = useState('h1')
  return (
    
    <div className={isThemeDark ? s.middleDark : s.middle}>
        <div className={s.middle_container}>
            <div className={s.grafic}>
                 <Grafic el={coin} interval={intervalGrafic}/>
                <div className={s.listitem_grafic}>
                    <ButtonGrafic lang={language} en='1D' ru='1Д'  action={setIntervalGrafic} interval='h1' active={intervalGrafic}/>
                    <ButtonGrafic lang={language} en='1W' ru='1Н'  action={setIntervalGrafic} interval='h1' active={intervalGrafic}/>
                    <ButtonGrafic lang={language} en='1M' ru='1М'  action={setIntervalGrafic} interval='d1' active={intervalGrafic}/>
                    <ButtonGrafic lang={language} en='3M' ru='1М'  action={setIntervalGrafic} interval='h1' active={intervalGrafic}/>
                    <ButtonGrafic lang={language} en='6M' ru='1М'  action={setIntervalGrafic} interval='h1' active={intervalGrafic}/>
                    <ButtonGrafic lang={language} en='1Y' ru='1Г'  action={setIntervalGrafic} interval='h1' active={intervalGrafic}/>
                </div>
            </div>
            <SwapAssetsCoin/>
        </div>
    </div>
  )
}
