import Link from "next/link";
import s from "./../../styles/LayoutHeader.module.scss";
import Image from "next/image";
import imageBlack from "./../assets/image/black.svg";
import imageWhite from "./../assets/image/white.svg";
import { SearchHeader } from "./ui/searchHeader/SearchHeader";
import SettingsUi from "./ui/settingsUi/SettingsUi";
import { translate } from "../assets/helpers/settings";
import { useDispatch } from "react-redux";
import MobileScreenHeader from "./ui/MobileScreenHeader";
import { Button } from "./ui/Button";
export const Header = ({settings}) => {
   
  return (
    <div  className={settings.isThemeDark ? s.containerDark : s.container}>
      <MobileScreenHeader/>
      <div className={s.fullScreen}>
        <div className={s.links}>
          <Link href="/">
            <a>
              <div>{translate(settings.language,'Coins','Монеты')}</div>
            </a>
          </Link>
          <Link href="/exchanges">
            <a><div>
              {translate(settings.language,'Exchanges','Обменники')}  
            </div></a>
          </Link>
          <Link href="/swap">
            <a><div>
               {translate(settings.language,'Swap','Обмен')} 
            </div></a>
          </Link>
        </div>
        <div className={s.logo}>
        <Link href='/'>
            <a>
                 <Image  src={settings.isThemeDark ? imageWhite : imageBlack} alt="CoinCap" />
            </a>
        </Link>
         
        </div>
        <div className={s.menu}>
            <SearchHeader settings={settings.isThemeDark}/>
            <SettingsUi  settings={settings.isThemeDark}/>
            <Button en='Connect Wallet' ru='Подключить кошелек'/>
        </div>
      </div>
    </div>
  );
};
