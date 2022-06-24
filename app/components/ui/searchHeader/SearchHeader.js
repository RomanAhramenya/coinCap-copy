
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useOutSideClick } from "../../../hooks/useOutSideClick";
import s from './../../../../styles/LayoutHeader.module.scss'
import search from './../../../assets/image/search.png'
import searchBlack from './../../../assets/image/searchBlack.png'
export const SearchHeader = ({settings}) => {
  const inputElement = useRef(null);
  const tooltipRef = useRef(null)
  const [value,setValue] = useState('')
  const [isTouched,setIsTouched] = useState(false)
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [isTouched]);
  const handlerClick = () => {
    setIsTouched(false)
}
    const changehandler = (e) => {
      setValue(e.currentTarget.value)
    }
    useOutSideClick(tooltipRef,handlerClick,isTouched)
  return (
    <div ref={tooltipRef} className={`${s.menu_item}  ${s.pos_relative}`}>
            <input  ref={inputElement} value={value} onChange={e  => changehandler(e)} className={isTouched ? s.inputBlock : s.inputNone } type="text" />
           
           <div className={s.image}>
            <Image width={16} height={16} onClick={()=>setIsTouched(!isTouched)} src={settings ? searchBlack : search} alt='search'/>
           </div> 
          </div>
  )
}
