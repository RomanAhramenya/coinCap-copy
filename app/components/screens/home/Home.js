import {  useSelector } from "react-redux";

import { Layout } from "../../layout/Layout";
import { MainStatisticsHeader } from "../../ui/mainStatisticsHeader/MainStatisticsHeader";
import { TableHome } from "./TableHome";

export const Home = () => {
  const settings = useSelector((state) => state.settings);
  const {language,isThemeDark,currency} = settings


  return (
    <Layout title="Reliable Cryptocurrency Prices and Market Capitalizations">
      <MainStatisticsHeader
        currency={currency}
        isThemeDark={isThemeDark}
        language={language}
      />
     <TableHome/>
    </Layout>
  );
};
