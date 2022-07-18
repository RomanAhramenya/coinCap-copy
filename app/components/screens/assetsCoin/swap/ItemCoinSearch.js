
import Image from 'next/image'
import s from './../../../../../styles/swap.module.scss'
export const ItemCoinSearch = ({id,symbol,name,setImage,price,close}) => {
    function clickHandle() {
        setImage({img:symbol.toLowerCase(),price:price})
        close(false)
    }
  return (
    <div onClick={()=> clickHandle()}  className={s.token_list} key={id}>
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
