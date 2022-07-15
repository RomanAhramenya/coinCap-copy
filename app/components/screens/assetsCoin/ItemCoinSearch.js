
import Image from 'next/image'
import s from './../../../../styles/assetsCoin.module.scss'
export const ItemCoinSearch = ({id,symbol,name}) => {
  return (
    <div  className={s.token_list} key={id}>
            <div>
              <Image width={30} height={30}  src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} alt={name} />
              <div>
                <div>{symbol}</div>
                <div>{name}</div>
              </div>
            </div>  
            </div>
  )
}
