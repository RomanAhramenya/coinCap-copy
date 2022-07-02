import Head from 'next/head'
import { Home } from '../app/components/screens/home/Home'
import { getCoins, getExchanges } from '../app/store/slice/getCoinsAction'
import { wrapper } from '../app/store/store'


export default function HomePage() {
  
  return <Home />
}
// export const getServerSideProps = wrapper.getServerSideProps(store => async ctx => {
//   const {offset} = ctx
//   const data =  store.getState()
//   const coin = await store.dispatch(getCoins('0'))
//   const exchanges = await store.dispatch(getExchanges())
//   console.log(data)
// return {
//   props:{
//     coin: JSON.parse(JSON.stringify(coin)),
//     exchanges: JSON.parse(JSON.stringify(exchanges))
//   }
// }
// })