import {
  currencyHelper,
  roundUpToB_M_T,
  roundUpToB_M_T_currency,
  translate,
} from "../../../assets/helpers/settings";
import s from "./../../../../styles/assetsCoin.module.scss";
import { changeClassName } from "../../../assets/helpers/settings";
import { Button } from "../../ui/Button";
const HeaderAssetsCoin = ({
  settings,
  rank,
  name,
  symbol,
  changePercent24Hr,
  priceUsd,
  marketCapUsd,
  volumeUsd24Hr,
  supply,
}) => {
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
              <h1>{`${name} (${symbol})`}</h1>
              <h2>
                <span>{currencyHelper(settings.currency, priceUsd)}</span>
                <div className={changeClassName(changePercent24Hr)}>
                  {Number(changePercent24Hr).toFixed(2)} %
                  {changePercent24Hr >= 0 ? (
                    <span> &#9650;</span>
                  ) : (
                    <span>&#9660;</span>
                  )}
                </div>
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
                    {translate(
                      settings.language,
                      "Market Cap",
                      "Рыночная капитализация"
                    )}
                  </div>
                  <span>
                    {" "}
                    {roundUpToB_M_T(
                      roundUpToB_M_T_currency(settings.currency, marketCapUsd)
                    )}
                  </span>
                </div>
               
               
              </div>
              <div className={s.right_header_colum}>
              <div className={s.right_header_colum__section}>
                  <div>
                    {translate(settings.language, "Volume(24h)", "Объем(24ч)")}
                  </div>
                  <span>{roundUpToB_M_T(volumeUsd24Hr)}</span>
                </div>
              </div>
              <div className={s.right_header_colum}>
              <div className={s.right_header_colum__section}>
                  <div>{translate(settings.language, "Supply", "Supply")}</div>
                  <span>{roundUpToB_M_T(supply)}</span>
                </div>
              </div>
            </div>
            <div className={s.right_header_row}>
              <div className={s.right_header_colum}>
                <a href="https://bitcoin.org/ru/" target='_blank'> <Button en='Website' ru='Сайт'/></a>
              </div>
              <div className={s.right_header_colum}>
              <a href="https://www.blockchain.com/explorer" target='_blank'> <Button en='Explorer' ru='Иследовать'/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAssetsCoin;
