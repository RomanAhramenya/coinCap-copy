import Image from 'next/image'
import { useState } from 'react'
import s from './../../../../styles/assetsCoin.module.scss'

const SearchCoin = ({coins,value}) => {
   
  return (
    <>
      
        <div className={s.searchCoins}>
        { value ?  coins.map(el=>{
           
         if(el.id.search(value) == -1) {
        return  <div style={{display:'none'}} key={el.id}>
        <div>
        
          <div>
            <div>{el.symbol}</div>
            <div>{el.name}</div>
          </div>
        </div>
        
        </div>
      }
      
     
      else{
     return   <div  className={s.token_list} key={el.id}>
            <div>
             
              <div>
                <div>{el.symbol}</div>
                <div>{el.name}</div>
              </div>
            </div>
            
            </div>
      }
      }) : coins.map(el=>{
        return  <div  className={s.token_list} key={el.id}>
            <div>
              <Image width={30} height={30}  src={`https://assets.coincap.io/assets/icons/${el.symbol.toLowerCase()}@2x.png`} alt={el.name} />
              <div>
                <div>{el.symbol}</div>
                <div>{el.name}</div>
              </div>
            </div>
            
            </div>
      })}
        </div>
    </>
  )
}

export default SearchCoin
