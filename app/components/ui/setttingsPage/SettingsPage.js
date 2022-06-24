
import  { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { translate } from '../../../assets/helpers/settings'
import { setIsLanguage, setIsSetting, setIsTheme } from '../../../store/slice/settingsSlice'
import s from './../../../../styles/settingsPage.module.scss'
import closeImage from './../../../assets/image/close.png'
import image from './../../../assets/image/settingsPage.png'
import Image from 'next/image'
import Select from './Select'
const SettingsPage = ({settings}) => {
    const dispatch = useDispatch()
    const [valueCheckBox,setValueChekBox] = useState(false)
    useEffect(()=>{
        setValueChekBox(settings.isThemeDark)
    })
    const checkBoxHandler = (e) =>{
        setValueChekBox(e.target.checked)
        dispatch(setIsTheme(e.target.checked) )
    }
    const changeHandler = (e) => {
        dispatch(setIsLanguage(e.target.value.toLowerCase()))
    }
    const closeSetting = () =>{
        dispatch(setIsSetting(false))
        document.getElementsByTagName('body')[0].classList.remove('hidden')
    }
  return (
    <div className={s.container}>
      <div className={s.row}>
        <div>
            <Image src={image} alt='settings'/> 
            <span style={{marginLeft:'1em'}}>{translate(settings.language,'Settings','Настройки')}</span>
        </div>
       <div onClick={closeSetting} className={s.close}> 
       <Image src={closeImage} alt='close'/>
       </div>
      </div>
      <div className={s.row}>
        <div>
            Dark Theme
        </div>
        <div>
            <input  onChange={e => checkBoxHandler(e)} checked={valueCheckBox} type='checkbox'/>
        </div>
      </div>
      <Select settings={settings}/>
      <div className={s.row}>
        <div>
          {translate(settings.language,'Language','Язык')}
        </div>
        <div>
            <select onChange={e => changeHandler(e)} value={settings.language.toUpperCase()}>
                <option>EN</option>
                <option>RU</option>
            </select>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
