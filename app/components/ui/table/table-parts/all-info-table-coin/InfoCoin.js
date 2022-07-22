
import Link from 'next/link'
import { Button } from '../../../Button'
import { Grafic } from '../../../grafic/Grafic'
import s from './../../table.module.scss'

export const InfoCoin = ({currency,el}) => {
  return (
    <>
            <td  colSpan={9}>
               
    <Grafic el={el} currency={currency}  interval={'h1'} day={'h1'}/>
    <div className={s.moreDetails}>
   <Link href={'/assets/[id]'} as={`/assets/${el.id}`} >
    <a>
      <Button en="More Details" ru="Подробнее"/>
    </a>
    </Link>
    
    </div>
</td>
    </>


  )
}
