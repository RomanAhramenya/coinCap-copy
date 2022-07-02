import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyHelper, translate } from "../../../assets/helpers/settings";
import { getExchanges } from "../../../store/slice/getCoinsAction";
import { getMarkets, getStatistics } from "../../../store/slice/getCoinsSlice";
import { wrapper } from "../../../store/store";
import s from "./../../../../styles/mainStatisticsHeader.module.scss";
import MainStatisticsHeaderItem from "./MainStatisticsHeaderItem";
export const MainStatisticsHeader = ({ language, isThemeDark, currency }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.coins);
  const [isStatistics, setIsStatistic] = useState(false);
  useEffect(() => {
    dispatch(getStatistics());
  }, [state.coins]);
  useEffect(() => {
    dispatch(getMarkets());
  }, [state.exchanges.data]);

  const marketCap = state.mainStatistic.MarketCap;
  const val = state.mainStatistic.vol;
  const exchanges = state.mainStatistic.exchanges;
  return (
    <div className={isThemeDark ? s.containerDark : s.container}>
      <div className={s.items}>
        <div className={s.header_mobile__screen}>
          <div className={s.header_mobile__screen_title}>
            {translate(language, "Market Shapshot", "Обзор рынка")}
          </div>
          <div className={s.header_mobile__screen_image}>&#9668;</div>
        </div>
        <div className={s.item_row}>
          <MainStatisticsHeaderItem
            lan={language}
            worldEn={"MARKET CAP"}
            WorldRu={"РЫНОЧНАЯ КАПИТАЛИЗАЦИЯ"}
            val={`${currencyHelper(currency, marketCap)} ${translate(
              language,
              "T",
              "Трл"
            )}`}
          />
          <MainStatisticsHeaderItem
            lan={language}
            worldEn={"EXCHANGE VOL"}
            WorldRu={"ОБЬЕМ ОБМЕНА"}
            val={`${currencyHelper(currency, val)} ${translate(
              language,
              "B",
              "Млрд"
            )}`}
          />
          <MainStatisticsHeaderItem
            lan={language}
            worldEn={"ASSETS"}
            WorldRu={"ASSETS"}
            val={2295}
          />
        </div>
        <div className={s.item_row}>
          <MainStatisticsHeaderItem
            lan={language}
            worldEn={"EXCHANGES"}
            WorldRu={"EXCHANGES"}
            val={exchanges}
          />
          <MainStatisticsHeaderItem
            lan={language}
            worldEn={"MARKETS"}
            WorldRu={"MARKETS"}
            val={14929}
          />
          <MainStatisticsHeaderItem
            lan={language}
            worldEn={"BTC DOM INDEX"}
            WorldRu={"BTC ИНДЕКС DOM"}
            val={"30,8%"}
          />
        </div>
      </div>

      <div className={s.items_dark}>
        <div className={s.header_mobile__screen}>
          <div className={s.header_mobile__screen_title}>
            {translate(language, "Market Shapshot", "Обзор рынка")}
          </div>
          <div
            onClick={() => setIsStatistic(!isStatistics)}
            className={s.header_mobile__screen_image}
          >
            {isStatistics ? <span>&#9660;</span> : <span>&#9668;</span>}
          </div>
        </div>
        {isStatistics && (
          <>
            <div className={s.item_row}>
              <MainStatisticsHeaderItem
                lan={language}
                worldEn={"MARKET CAP"}
                WorldRu={"РЫНОЧНАЯ КАПИТАЛИЗАЦИЯ"}
                val={`${currencyHelper(currency, marketCap)} ${translate(
                  language,
                  "T",
                  "Трл"
                )}`}
              />
              <MainStatisticsHeaderItem
                lan={language}
                worldEn={"EXCHANGE VOL"}
                WorldRu={"ОБЬЕМ ОБМЕНА"}
                val={`${currencyHelper(currency, val)} ${translate(
                  language,
                  "B",
                  "Млрд"
                )}`}
              />
              <MainStatisticsHeaderItem
                lan={language}
                worldEn={"ASSETS"}
                WorldRu={"ASSETS"}
                val={2295}
              />
            </div>
            <div className={s.item_row}>
              <MainStatisticsHeaderItem
                lan={language}
                worldEn={"EXCHANGES"}
                WorldRu={"EXCHANGES"}
                val={exchanges}
              />
              <MainStatisticsHeaderItem
                lan={language}
                worldEn={"MARKETS"}
                WorldRu={"MARKETS"}
                val={14929}
              />
              <MainStatisticsHeaderItem
                lan={language}
                worldEn={"BTC DOM INDEX"}
                WorldRu={"BTC ИНДЕКС DOM"}
                val={"30,8%"}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};



