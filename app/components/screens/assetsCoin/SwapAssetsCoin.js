import Image from "next/image";
import { translate } from "../../../assets/helpers/settings";
import { Button } from "../../ui/Button";
import s from "./../../../../styles/assetsCoin.module.scss";
import image from "./../../../assets/image/settings.png";
import imageDark from "./../../../assets/image/settingsBlack.png";
import imageSwap from "./../../../assets/image/swap.png";
import imageSwapDark from "./../../../assets/image/swapDark.png";
import { ShowSelectToken } from "./ShowSelectToken";
export const SwapAssetsCoin = ({ isThemeDark, language }) => {
  return (
    <div className={isThemeDark ? s.swapDark : s.swap}>
      <div className={s.swap_container}>
        <div className={s.swap_header}>
          <h3>Swap</h3>
          <div className={s.image}>
            <Image
              width={20}
              height={20}
              src={isThemeDark ? imageDark : image}
              alt="settings"
            />
          </div>
        </div>
        <div className={s.swap_content}>
          <div className={s.swap_content_top}>
            <div>
              <label>{translate(language, "You Sell", "Вы Отдаёте")}</label>
            </div>
            <div className={s.operation}>
              <input type='number'  placeholder="0"/>
              <button>
                <div className={s.operation_image}>
                  <Image
                    width={26}
                    height={26}
                    src={`https://assets.coincap.io/assets/icons/eth@2x.png`}
                    alt="eth"
                  />
                </div>
                <span>ETH  &#9660;</span>             
              </button>
            </div>
          </div>
          <div className={s.swap_content_middle}>
            <Image src={isThemeDark ? imageSwapDark : imageSwap} alt='swap' width={25} height={25}/>
          </div>
          <div className={s.swap_content_bottom}>
            <div>
              <label>{translate(language, "You Get", "Вы Получаете")}</label>
            </div>
            <div className={s.operation}>
              <input type='number'  placeholder="0"/>
              <button>
                <span>{translate(language,"Select a token" , "Выберите токен")}  &#9660;</span>             
              </button>
            </div>
          </div>
          <Button en='Conect Wallet' ru='Подключить кошелёк'/>
          <ShowSelectToken language={language}/>
        </div>
        
      </div>
    </div>
  );
};
