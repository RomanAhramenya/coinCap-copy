import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout } from "../../app/components/layout/Layout";
import { AssetsCoin } from "../../app/components/screens/assetsCoin/AssetsCoin";
import { Loader } from "../../app/components/ui/Loader";

export default function Assets({ coin: serverCoin, history: serverHistory }) {

  const [history, setHistory] = useState(serverHistory);
  const [coin, setCoin] = useState(serverCoin);
  const router = useRouter();
  useEffect(() => {
    
    async function load() {
      
      const responseCoin = await fetch(
        `https://api.coincap.io/v2/assets/${router.query.id}`
      ).then((res) => {
        return res.json();
      });
      const coin = await responseCoin;
      setCoin(coin);
     
      let myDate = new Date();

      let end = myDate.setTime(myDate.getTime());

      let data = new Date();
      let start = data.setDate(data.getDate() - 1);
      const responseHistory = await fetch(
        `https://api.coincap.io/v2/assets/${router.query.id}/history?interval=h1&start=${start}&end=${end}`
      ).then((res) => {
        return res.json();
      });
    
      const history = await responseHistory;
      setHistory(history);
     
    }
    if (!serverCoin || !serverHistory) {
     
      load();
    }
  }, []);

  if (!coin || !history) {
    return (
      <Layout title="">
        <Loader/>
      </Layout>
    );
  }
  return (
    <Layout title="">
      <AssetsCoin coin={coin} history={history} />
    </Layout>
  );
}

Assets.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return {
      coin: null,
      history: null,
    };
  }
  const responseCoin = await fetch(
    `https://api.coincap.io/v2/assets/${query.id}`
  ).then((res) => {
    return res.json();
  });
  const coin = await responseCoin;

  let myDate = new Date();

  let end = myDate.setTime(myDate.getTime());

  let data = new Date();
  let start = data.setDate(data.getDate() - 1);
  const responseHistory = await fetch(
    `https://api.coincap.io/v2/assets/${query.id}/history?interval=h1&start=${start}&end=${end}`
  ).then((res) => {
    return res.json();
  });
  const history = await responseHistory;

  return {
    coin,
    history,
  };
};
