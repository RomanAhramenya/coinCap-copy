import React, { useRef, useState } from "react";
import s from "./../../../../styles/settingsPage.module.css";
import usaImage from "./../../../assets/image/usa.png";
import belImage from "./../../../assets/image/bel.png";
import rusImage from "./../../../assets/image/rus.png";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setIsCurrency } from "../../../store/slice/settingsSlice";
import { useOutSideClick } from "../../../hooks/useOutSideClick";
const Select = ({ settings }) => {
  const [isTouched, setIsTouched] = useState(false);
  const dispatch = useDispatch()
  const tooltipRef = useRef(null)
  const selectHandler = (currency) => {
    dispatch(setIsCurrency(currency))
  }
  const handlerClick = () => {
    setIsTouched(false)
}
  useOutSideClick(tooltipRef,handlerClick,isTouched)
  return (
    <div ref={tooltipRef} className={s.row_select}>
      <div >{settings.currency}</div>
      <div className={s.select_button} onClick={()=>setIsTouched(!isTouched)}>&#9660;</div>
      {isTouched && (
        <div className={s.select}>
          <div onClick={() => selectHandler('USD')} className={settings.currency === 'USD' ? s.active : ''}>
            <Image src={usaImage} alt="usa" />
            <span>USD</span>
          </div>
          <div onClick={() => selectHandler('BYR')} className={settings.currency === 'BYR' ? s.active : ''}>
            <Image src={belImage} alt="bel" />
            <span>BYR</span>
          </div>
          <div onClick={() => selectHandler('RUB')} className={settings.currency === 'RUB' ? s.active : ''}>
            <Image src={rusImage} alt="rus" />
            <span>RUS</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
