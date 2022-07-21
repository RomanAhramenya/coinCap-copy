import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout } from "../../app/components/layout/Layout";
import ExchangesId from "../../app/components/screens/exchanges/exchangesId/ExchangesId";
import { Loader } from "../../app/components/ui/Loader";


export default function Ex ({ exchanges:server}) {
  const [exchanges,setExchages] = useState(server)
  const router = useRouter()
  useEffect(()=>{
      async function load() {
          const response = await fetch(
              `https://api.coincap.io/v2/exchanges/${router.query.id}`
            ).then((res) => {
              return res.json();
            });
            const exchanges = await response
            setExchages(exchanges)
      }
      if (!server) {
          load();
        }
  },[])

  if (!exchanges) {
      return (
        <Layout title="">
          <Loader/>
        </Layout>
      );
    }
    console.log(exchanges)
return (
  <Layout title={router.query.id}>
    <ExchangesId data={exchanges.data}/>
  </Layout>
);
}

Ex.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return {
      exchanges:null
    };
  }
const response = await fetch(
  `https://api.coincap.io/v2/exchanges/${query.id}`
).then((res) => {
  return res.json();
});
const exchanges = await response
return {
  exchanges
}}
;