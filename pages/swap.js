import { Layout } from '../app/components/layout/Layout'
import {SwapAssetsCoin} from './../app/components/screens/assetsCoin/swap/SwapAssetsCoin'
import { useSelector,useDispatch } from "react-redux";
import s from './../styles/swap.module.scss'
export default function Swap  ()  {
    const settings = useSelector(state => state.settings)
    const {isThemeDark,language} = settings
  
  return (
    <Layout title={'Swap'}>
    <div  className={isThemeDark ? s.swap_page_Dark : s.swap_page}>
       
              <SwapAssetsCoin btc='btc' btcPrice='20000' isThemeDark={isThemeDark} language={language}/>
        
      
    </div>
         
    </Layout>
   
    
  )
}
