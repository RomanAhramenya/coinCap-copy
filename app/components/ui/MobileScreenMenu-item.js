import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { translate } from '../../assets/helpers/settings'

import s from './../../../styles/LayoutHeader.module.css'
const MobileScreenMenuItem = ({href,worldEn,worldRu,imageDark,image,alt}) => {
    const settings = useSelector(state => state.settings)
    const isDark = settings.isThemeDark
    const transl = settings.language
  return (
    <Link href={href} >
    <a className={s.mobail_menu_item}>
        <div>
        <Image width={24} height={24} src={isDark  ? imageDark : image} alt={alt}/>
    </div>
    <div>
        {translate(transl,worldEn,worldRu)}
    </div>
    </a>
    
  </Link>
  )
}

export default MobileScreenMenuItem
