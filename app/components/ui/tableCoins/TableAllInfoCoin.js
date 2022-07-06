import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHistory } from '../../../store/slice/getCoinsAction'
import { Button } from '../Button'
import { Grafic } from '../grafic/Grafic'
import s from './../../../../styles/tableCoins.module.scss'
const TableAllInfoCoin = ({currency,el}) => {

  return (
        <>
         
              <td  colSpan={9}>
               
                    <Grafic el={el} currency={currency}  interval={'h1'}/>
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

export default TableAllInfoCoin
