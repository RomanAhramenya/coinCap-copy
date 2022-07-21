
import { useSelector } from "react-redux";
import { roundUpToB_M_T, roundUpToB_M_T_currency, translate } from "../../../../assets/helpers/settings";
import { Button } from "../../../ui/Button";
import s from './../../../../../styles/assetsCoin.module.scss'
const ExchangesId = ({data}) => {
   const {name,exchangeUrl,rank,tradingPairs,volumeUsd} = data
   const settings = useSelector((state) => state.settings);
  return (
    <div className={settings.isThemeDark ? s.headerDark : s.header}>
    <div className={s.container}>
      <div className={s.left_header}>
        <div className={s.left_header_container}>
          <div className={s.left_header_rank}>
            <div className={s.left_header_rank__flag}>
              <h1>{rank}</h1>
              <p>{translate(settings.language, "RANK", "РЕЙТИНГ")}</p>
            </div>
          </div>
          <div className={s.left_header_name}>
            <h1>{name}</h1>
            <h2>
              <span>{tradingPairs} Pairs</span>
             
            </h2>
          </div>
        </div>
      </div>
      <div className={s.right_header}>
        <div className={s.right_header_container}>
          <div className={s.right_header_row}>
            <div className={s.right_header_colum}>
              <div className={s.right_header_colum__section}>
                <div>
                  
                    Volume (24Hr)
                   
                  
                </div>
                <span>
                  {" "}
                  {roundUpToB_M_T(
                      roundUpToB_M_T_currency(settings.currency,volumeUsd))} 
                </span>
              </div>
             
             
            </div>
            <div className={s.right_header_colum}>
            <div className={s.right_header_colum__section}>
                <div>
                  Top Pair
                </div>
                <span>BTC/USDT</span>
              </div>
            </div>
          </div>
          <div className={s.right_header_row}>
            <div className={s.right_header_colum}>
              <a href={exchangeUrl} target='_blank'> <Button en='Website' ru='Сайт'/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ExchangesId;


