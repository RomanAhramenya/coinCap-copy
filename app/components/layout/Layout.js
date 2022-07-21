import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsCurrency, setIsLanguage, setIsTheme } from '../../store/slice/settingsSlice'
import Footer from '../Footer'
import SettingsPage from '../ui/setttingsPage/SettingsPage'
import FavIcon from './../../assets/image/favicon.ico'
import { Header } from './../Header'
export const Layout = ({children,title}) => {
  const settings = useSelector(state => state.settings)
  const dispatch = useDispatch()

  const isSetting = settings.isSetting
 
  useEffect(()=>{
    const theme = localStorage.getItem('themeDark')
    const language = localStorage.getItem('lan')
    const currency = localStorage.getItem('currency')
    if (theme == 'dark'){

      dispatch(setIsTheme(true))
    }
    if (language){
      dispatch(setIsLanguage(language))
    }
    if (currency) {
      dispatch(setIsCurrency(currency))
    }
  },[])
  return (
    <>
    <Head>
    <title>CoinCap copy | {title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet"/>
    <meta name='description' content="CoinCap"/>
    <link rel='shortcut icon' href={FavIcon.src} type='image/png'/>
    </Head>
    <div>
       {isSetting && <SettingsPage settings={settings}/>} 
        <Header settings={settings}/>
       {children} 
       <Footer settings={settings}/>
    </div>
    </>
 
  )
}
