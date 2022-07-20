import Image from "next/image";
import coin from "./../../assets/image/bitcoin.png";
import coinDark from "./../../assets/image/bitcoinDark.png";
import exchange from "./../../assets/image/refresh.png";
import exchangeDark from "./../../assets/image/refreshDark.png";
import swap from "./../../assets/image/swap.png";
import swapDark from "./../../assets/image/swapDark.png";
import api from "./../../assets/image/api.png";
import apiDark from "./../../assets/image/apiDark.png";
import setting from "./../../assets/image/settings.png";
import settingDark from "./../../assets/image/settingsBlack.png";
import { translate } from "../../assets/helpers/settings";
import s from "./../../../styles/LayoutHeader.module.scss";
import React, { useRef, useState } from "react";
import { useOutSideClick } from "../../hooks/useOutSideClick";
import imageMenu from "./../../assets/image/menu.png";
import imageClose from "./../../assets/image/close.png";
import imageMenuDark from "./../../assets/image/menuDark.png";
import MobileScreenMenuItem from "./MobileScreenMenu-item";
const MobileScreenHeaderMenu = ({ settings }) => {
  const tooltipRef = useRef(null);
  const [isMenu, setIsMenu] = useState(false);
  const [isSetting,setIsSetting] = useState(true)
  const handlerClick = () => {
    setIsMenu(false);
  };
  useOutSideClick(tooltipRef, handlerClick, isMenu);
  return (
    <div ref={tooltipRef}>
      <div onClick={() => setIsMenu(!isMenu)} className={s.burger}>
        <Image
          width={24}
          height={24}
          src={
            isMenu
              ? imageClose
              : settings.isThemeDark
              ? imageMenuDark
              : imageMenu
          }
        />
      </div>
      {isMenu && (
        <div
          style={{ background: settings.isThemeDark ? "black" : "white" }}
          className={s.mobail_menu}
        >
          <MobileScreenMenuItem
            href="/"
            worldEn="Coins"
            worldRu="Монеты"
            imageDark={coinDark}
            image={coin}
            alt="coins"
          />
          <MobileScreenMenuItem
            href="/exchanges"
            worldEn="Exchanges"
            worldRu="Обменники"
            imageDark={exchangeDark}
            image={exchange}
            alt="exchanges"
          />
          <MobileScreenMenuItem
            href="swap"
            worldEn="Swap"
            worldRu="Обмен"
            imageDark={swapDark}
            image={swap}
            alt="swap"
          />
          <MobileScreenMenuItem
            href="/coincap-api"
            worldEn="CoinCap API"
            worldRu="CoinCap API"
            imageDark={apiDark}
            image={api}
            alt="api"
          />
          <MobileScreenMenuItem
            href="settings"
            worldEn="Settings"
            worldRu="Настройки"
            imageDark={settingDark}
            image={setting}
            alt="setting"
          />
        </div>
      )}
    </div>
  );
};
export default MobileScreenHeaderMenu;
