import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { Layout } from '../../layout/Layout'
import {MainStatisticsHeader} from '../../ui/mainStatisticsHeader/MainStatisticsHeader';
import { Tablecoins } from '../../ui/tableCoins/Tablecoins';


export const Home = () => {
	const isThemeDark = useSelector(state => state.settings.isThemeDark)
	const language = useSelector(state => state.settings.language)
	const currency = useSelector(state => state.settings.currency)

  return (
    <Layout title='Reliable Cryptocurrency Prices and Market Capitalizations'>
      <MainStatisticsHeader currency={currency} isThemeDark={isThemeDark} language={language}/>
	  <Tablecoins  currency={currency} isThemeDark={isThemeDark} language={language}/>
    </Layout>
  )
}



