import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../../../ui/Button";
import s from "./../../../../../styles/swap.module.scss";
import image from "./../../../../assets/image/settings.png";
import imageDark from "./../../../../assets/image/settingsBlack.png";
import imageSwap from "./../../../../assets/image/swap.png";
import imageSwapDark from "./../../../../assets/image/swapDark.png";
import InputSelect from "./InputSelect";
import { ShowSelectToken } from "./ShowSelectToken";
import { SwapSettings } from "./SwapSettings";
export const SwapAssetsCoin = ({ btc, btcPrice, isThemeDark, language }) => {
  const [isShowSelectTokenFirst, setIsShowSelectTokenFirst] = useState(false);
  const [isShowSelectTokenSecond, setIsShowSelectTokenSecond] = useState(false);
  const [showSettings,setShowSettings] = useState(false)
  const [valueInputFirst, setValueInputFirst] = useState("");
  const [valueInputSecond, setValueInputSecond] = useState("");
 
  const [imageFirst, setImageFirst] = useState({ img: btc, price: btcPrice });
  const [imageSecond, setImageSecond] = useState({ img: btc, price: btcPrice });
  function calc() {
    return `1 ${imageFirst.img.toUpperCase()} = ${(
      Number(imageFirst.price) / Number(imageSecond.price)
    ).toFixed(7)} ${imageSecond.img.toUpperCase()}`;
  }
  useEffect(() => {
    setValueInputSecond(
      (Number(valueInputFirst) * Number(imageFirst.price)) /
        Number(imageSecond.price)
    );
  }, [valueInputFirst]);
  function reverceCoin() {
    setImageFirst(imageSecond);
    setImageSecond(imageFirst);
    setValueInputFirst(valueInputSecond);
    setValueInputSecond(valueInputFirst);
  }
  return (
    <div className={isThemeDark ? s.swapDark : s.swap}>
      <div className={s.swap_container}>
        <div className={s.swap_header}>
          <h3>Swap</h3>
          <div onClick={()=> setShowSettings(true)} className={s.image}>
            <Image
              width={20}
              height={20}
              src={isThemeDark ? imageDark : image}
              alt="settings"
            />
          </div>
        </div>
        <div className={s.swap_content}>
          <InputSelect
            disabled={false}
            value={valueInputFirst}
            setValue={setValueInputFirst}
            en="You Sell"
            ru="Вы отдаете"
            image={imageFirst.img}
            showHandler={setIsShowSelectTokenFirst}
            language={language}
          />
          <div className={s.swap_content_middle}>
            <div onClick={() => reverceCoin()}>
              <Image
                src={isThemeDark ? imageSwapDark : imageSwap}
                alt="swap"
                width={25}
                height={25}
              />
            </div>
            {valueInputFirst && (
              <div className={s.price}>
                <div>{calc()}</div>
                <div>
                  i
                  <div>
                    Current rate based on size of the trade. Large trades can
                    impact price. Always confirm the rate before submitting{" "}
                  </div>
                </div>
              </div>
            )}
          </div>
          <InputSelect
            value={valueInputSecond}
            disabled={true}
            setValue={setValueInputSecond}
            en="You Get"
            ru="Вы получаете"
            image={imageSecond.img}
            showHandler={setIsShowSelectTokenSecond}
            language={language}
          />
          <div className={s.connectWallet}>
            <Button en="Conect Wallet" ru="Подключить кошелёк" />
          </div>
          
          {isShowSelectTokenFirst && (
            <ShowSelectToken
              setImage={setImageFirst}
              close={setIsShowSelectTokenFirst}
              language={language}
            />
          )}
          {isShowSelectTokenSecond && (
            <ShowSelectToken
              setImage={setImageSecond}
              close={setIsShowSelectTokenSecond}
              language={language}
            />
          )}
          {showSettings && <SwapSettings language={language} close={setShowSettings}/>}
        </div>
      </div>
    </div>
  );
};
