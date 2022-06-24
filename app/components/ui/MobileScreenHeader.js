
import s from "./../../../styles/LayoutHeader.module.scss";
import Image from 'next/image';
import imageBlack from "./../../assets/image/black.svg";
import imageWhite from "./../../assets/image/white.svg";
import { useSelector } from 'react-redux';
import MobileScreenHeaderMenu from './MobileScreenHeaderMenu';
import { SearchHeader } from './searchHeader/SearchHeader';
import Link from 'next/link';

const MobileScreenHeader = () => {
    const settings = useSelector(state => state.settings)
  
    
    
            
  return (
    <div className={s.mobileScreen}>
    <SearchHeader settings={settings.isThemeDark}/>
    <div className={s.logo}>
      <Link href='/'>
          <a>
               <Image  src={settings.isThemeDark ? imageWhite : imageBlack} alt="CoinCap" />
          </a>
      </Link>
       
      </div>
      <MobileScreenHeaderMenu  settings={settings}/>
      
    </div>
  )
}

export default MobileScreenHeader
