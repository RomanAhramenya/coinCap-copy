import { useState } from "react";
import { translate } from "../../../assets/helpers/settings";
import { Button } from "../../ui/Button";
import Table from "../../ui/table/Table";
import s from "./../../../../styles/tableCoins.module.scss";

export const FooterTable = ({ markets, settings }) => {
  const [currentMarkets, setCurrentmarkets] = useState(20);
  const [isDisabled, setIsDisabled] = useState(false);
  const { language, isThemeDark, currency } = settings;
  const filter = markets.filter((market) => market.volumePercent !== null);
  const marketsFilter = filter.slice(0, currentMarkets);

  function showMoreHandler() {
    if (currentMarkets < filter.length) setCurrentmarkets(currentMarkets + 20);
    else {
      setIsDisabled(true);
    }
  }
  const coinsTableValues = [
    {id:1,en:'Exchange',ru:'Обменники',style:'left_align',colSpan:2},
    {id:2,en:'Pair',ru:'Пара',style:'rigth_align',colSpan:1},
    {id:3,en:'Price',ru:'Стоимость',style:'rigth_align',colSpan:1},
    {id:4,en:'Volume(24hr)',ru:'Volume(24hr',style:'rigth_align',colSpan:1},
    {id:5,en:'Volume(%)',ru:'Volume(%)',style:'rigth_align',colSpan:1},
    {id:6,en:'Status',ru:'Статус',style:'center_align',colSpan:1},
  ]
  return  <Table arr={coinsTableValues} disabled={isDisabled} showMoreHandler={showMoreHandler} tr={marketsFilter} buttonAction={false} variantTable='exchangeCoins' />
  
     
 
};
