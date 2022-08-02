
import { useSelector } from "react-redux";
import { Layout } from "../../layout/Layout";
import { MainStatisticsHeader } from "../../ui/mainStatisticsHeader/MainStatisticsHeader";
import TableExchanges from "./TableExchanges";

export const Exchanges = () => {
  const settings = useSelector((state) => state.settings);
  const { language, isThemeDark,currency } = settings;
  return (
    <Layout title={'Exchanges'}>
    <MainStatisticsHeader currency={currency} isThemeDark={isThemeDark} language={language}/>
    <TableExchanges currency={currency} isThemeDark={isThemeDark} language={language}/>
    </Layout>
   
  );
};
