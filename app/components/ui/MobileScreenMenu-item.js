import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { translate } from '../../assets/helpers/settings'
import { setIsSetting } from '../../store/slice/settingsSlice'

import s from './../../../styles/LayoutHeader.module.scss'
const MobileScreenMenuItem = ({href,worldEn,worldRu,imageDark,image,alt}) => {
    const settings = useSelector(state => state.settings)
    const isDark = settings.isThemeDark
    const transl = settings.language
    const dispatch = useDispatch()
    const setSetting = () => {
      dispatch(setIsSetting(true))
      document.getElementsByTagName('body')[0].classList.add('hidden')
    }
  return (
    <>
         {href === 'settings' ? <div onClick={setSetting} className={s.mobail_menu_item}>
               <div>
        <Image width={24} height={24} src={isDark  ? imageDark : image} alt={alt}/>
    </div>
    <div>
        {translate(transl,worldEn,worldRu)}
    </div>
         </div> 
    
     
    
    
   :   <Link href={href} >
    <a className={s.mobail_menu_item}>
        <div>
        <Image width={24} height={24} src={isDark  ? imageDark : image} alt={alt}/>
    </div>
    <div>
        {translate(transl,worldEn,worldRu)}
    </div>
    </a>
    
  </Link>}
    </>
   
  
  )
}

export default MobileScreenMenuItem
