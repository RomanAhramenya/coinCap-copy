import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoins } from '../../../store/slice/getCoinsAction'
import { Layout } from '../../layout/Layout'
import getStore from './../../../store/store'
export const Home = () => {
	const dispatch = useDispatch();

  const coins = useSelector(state => state.coins);
	useEffect(()=>{
		dispatch(getCoins())
		console.log('efect')
	},[])
	console.log(coins.coins)
  return (
    <Layout title='Reliable Cryptocurrency Prices and Market Capitalizations'>
      <ul>
		 {/* {  coins.map(coin=>{
		return <li>{coin}</li>
	   })} */}
	  </ul>
	  
    </Layout>
  )
}

// export async function getServerSideProps() {
// const store = getStore()
// 	console.log(store)
// 	await store.dispatch(getCoins())
// 	return {
// 	  props: {
// 		initialState: store,
// 	  },
// 	};
//   }
