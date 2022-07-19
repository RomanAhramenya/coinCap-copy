import { useEffect, useState } from 'react'
import { translate } from '../../../../assets/helpers/settings';
import { Loader } from '../../../ui/Loader';
import image from './../../../../assets/image/close.png'
import s from './../../../../../styles/swap.module.scss'
import Image from 'next/image';
export const SwapSettings = ({
    exchanges:serverExchanges,
    language,
    close
}) => {
    const  [exchanges,setExchanges] = useState(serverExchanges)
    const [rateValue,setRateValue] = useState(1)
    const [RadioValue,setRadioValue] = useState(false)
    useEffect(()=>{
        async function load() {
            const responseExchanges = await fetch(
                `https://api.coincap.io/v2/exchanges`
              ).then((res) => {
                return res.json();
              });
              const exchanges = await responseExchanges;
              setExchanges(exchanges.data);
           
            }
            if (!serverExchanges) {
                load();
               } 
    },[])
    if (!exchanges) {
        return   <div className={s.show_container}> <Loader/></div> 
      }
      console.log(exchanges)
  return (
    <div className={s.show_container}>
          <div className={s.header_show}>
            <h3>{translate(language,'Settings' , 'Настройки')}</h3>
            <div  className={s.show_image} onClick={() => close(false)}>
                <Image width={15} height={15} src={image} alt='close'/>
            </div>
        </div>
        <div style={{display:'flex'}}>
            <div className={s.inputRate}>
                <span>Slippage Percentage:</span>
                <input readOnly type='number' inputMode='decimal' step='0.1' maxLength='2' className={s.inputProcent} value={rateValue}/>
                <input style={{
                     background: `linear-gradient(to right, rgb(24, 198, 131) 0%, rgb(24, 198, 131) ${rateValue*5}%, rgb(236, 239, 241) ${rateValue*5}%, rgb(236, 239, 241) 100%)`
                }} onChange={e => setRateValue(e.target.value)} type='range' min='0.1' max='20' step='0.1' className={s.inputSlider}  defaultValue={rateValue}/>
            </div>
            <div className={s.multitop}>
                <span>Multitop</span>
                <div>
                    <input id={'switch'}  type='checkbox' onChange={(e)=>setRadioValue(!RadioValue)} checked={RadioValue}/>
                    <label htmlFor='switch'><span></span></label>
                </div>
            </div>
        </div>
    </div>
  )
}


SwapSettings.getInitialProps = async ({ query, req }) => {
    if (!req) {
      return {
        exchanges: null,
      };
    }
    const responseExchanges = await fetch(
      `https://api.coincap.io/v2/exchanges`
    ).then((res) => {
      return res.json();
    });
    const exchanges = await responseExchanges;
  
    return {
      exchanges
    };
  };