
import Image from 'next/image';
import image from './../../../assets/image/close.png'
import { useEffect } from 'react';
import { useState } from 'react';
import { translate } from '../../../assets/helpers/settings';
import { Loader } from '../../ui/Loader';
import s from './../../../../styles/assetsCoin.module.scss'
import SearchCoin from './SearchCoin';
export const ShowSelectToken = ({coins:serverCoins,language}) => {
    const [coins, setCoins] = useState(serverCoins);
    const [isShow,setIsShow] = useState(false)
    const [value,setValue] = useState('')
    const changeHandler = (e) => {
        setValue(e.currentTarget.value)
      }
    useEffect(() => {
      async function load() {
        const responseCoins = await fetch(
          `https://api.coincap.io/v2/assets?limit=2000`
        ).then((res) => {
          return res.json();
        });
        const coins = await responseCoins.data;
        setCoins(coins);
       
        }
        if (!serverCoins) {
            load();
           } 
    }, []);
  
    if (!coins) {
      return   <div className={s.show_container}> <Loader/></div> 
    }
  return (

    <div className={s.show_container}>
        <div className={s.header_show}>
            <h3>{translate(language,'Select a Token' , 'Выберите токен')}</h3>
            <div className={s.show_image}>
                <Image width={15} height={15} src={image} alt='close'/>
            </div>
        </div>
        <div className={s.search}>
          <input value={value} onChange={e => changeHandler(e)} placeholder='Search by symbol,name, or address...'/>
        </div>
       <SearchCoin coins={coins} value={value}/>
</div>
  )
}


ShowSelectToken.getInitialProps = async ({ query, req }) => {
    if (!req) {
      return {
        coins: null,
      };
    }
    const responseCoins = await fetch(
      `https://api.coincap.io/v2/assets`
    ).then((res) => {
      return res.json();
    });
    const coin = await responseCoins;
  
    return {
      history
    };
  };
  
