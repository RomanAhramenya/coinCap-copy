import { useEffect, useState } from 'react'
import { translate } from '../../../../assets/helpers/settings';
import { Loader } from '../../../ui/Loader';
import image from './../../../../assets/image/close.png'
import s from './../../../../../styles/swap.module.scss'
import Image from 'next/image';
import { Button } from '../../../ui/Button';
export const SwapSettings = ({
    exchanges:serverExchanges,
    language,
    close
}) => {
    const  [exchanges,setExchanges] = useState(serverExchanges)
    const [rateValue,setRateValue] = useState(1)
    const [RadioValue,setRadioValue] = useState(false)
    const [selectExchanges,setSelectExchanges] = useState({})
    const [toggle,setToggle] = useState(false)
    let textExchanges =  Object.values(selectExchanges).filter(el => el.isSelect === true)
    function toggleAll () {
      let a={}
      if(toggle) {
         Object.values(selectExchanges).map((el,index)=> {
        console.log(el)
        a[index] = {name:el.name,isSelect:true}
      }
      ) 
      
    }
      if(!toggle) {
        Object.values(selectExchanges).map((el,index)=> {
       console.log(el)
       a[index] = {name:el.name,isSelect:false}
     }) 
      }
      setToggle(!toggle)
      setSelectExchanges(a)
    }
    useEffect(()=>{
        async function load() {
            const responseExchanges = await fetch(
                `https://api.coincap.io/v2/exchanges`
              ).then((res) => {
                return res.json();
              });
              const exchanges = await responseExchanges;
              setExchanges(exchanges.data);
              let a={}
              exchanges.data.map((ex,index)=>{
                a[index] = {name:ex.exchangeId,isSelect:true}
              })
              setSelectExchanges(a)
            }
            if (!serverExchanges) {
                load();
               } 
    },[])
    if (!exchanges) {
        return   <div className={s.show_container}> <Loader/></div> 
      }
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
        <div className={s.section_exchanges_settings}>
          <span>Exchages({textExchanges.length})</span>
          <Button action={toggleAll} language={language} en='Toggle All' ru='Выбрать все'/>
        </div>
       <div className={s.section_exchanges_all}>
            {Object.values(selectExchanges).map((el,index)=>{ 
              function changeHandler() {
               const updatedValue = {...selectExchanges}
                updatedValue[index].isSelect = !updatedValue[index].isSelect
                setSelectExchanges(updatedValue)
              }
      
              let key = Date.now() 
                 return <div key={key * Math.random(10000)} className={s.section_exchanges_item} >
                        <input onChange={changeHandler} checked={selectExchanges[index].isSelect} id={el.name} type='checkbox'/>
                        <label htmlFor={el.name}>{el.name}</label>
                </div>
            })}
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