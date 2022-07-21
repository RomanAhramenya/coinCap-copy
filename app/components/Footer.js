import Image from "next/image";
import s from "./../../styles/layoutFooter.module.scss";
import appleImage from './../assets/image/apple_store.svg'
import googlImage from './../assets/image/google_play.svg'
const Footer = ({ settings }) => {
  return (
    <footer>
      <div className={settings.isThemeDark ? s.containerDark : s.container}>
        <div className={s.footer}>
          <div className={s.column}>
            <div className={s.column_item_header}>COINCAP.IO</div>
            <div className={s.column_item_list}>
              <div className={s.column_item_listitem}>
                <a href="https://coincap.io/methodology" target={"_blank"}>
                  Methodology
                </a>
              </div>
              <div className={s.column_item_listitem}>
                <a
                  href="https://shapeshift.zendesk.com/hc/en-us/requests/new"
                  target={"_blank"}
                >
                  Support
                </a>
              </div>
              <div className={s.column_item_listitem}>
                <a href="https://docs.coincap.io/" target={"_blank"}>
                  Our API
                </a>
              </div>
              <div className={s.column_item_listitem}>
                <a href="https://coincap.io/rate-compare" target={"_blank"}>
                  Rate Comparison
                </a>
              </div>
              <div className={s.column_item_listitem}>
                <a href="https://shapeshift.com/careers" target={"_blank"}>
                  Careers
                </a>
              </div>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.column_item_header}>LEGALS</div>
            <div className={s.column_item_list}>
              <div className={s.column_item_listitem}>
                <a
                  href="https://assets.coincap.io/documents/terms_of_service.pdf"
                  target={"_blank"}
                >
                  Terms of Service
                </a>
              </div>
              <div className={s.column_item_listitem}>
                <a
                  href="https://shapeshift.com/privacy?_ga=2.71196627.2110388305.1658166725-281951245.1655839683"
                  target={"_blank"}
                >
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className={s.column_item_header}>DISCLAIMER</div>
            <div className={s.column_item_list}>
              <div className={s.column_item_listitem}>
                Neither ShapeShift AG nor CoinCap are in any way associated with
                CoinMarketCap, LLC or any of its goods and services.
              </div>
            </div>
          </div>
          <div className={s.column}>
            <div className={s.column_item_header}>FOLLOW US</div>
            <a href="https://twitter.com/CoinCap_io">
              {" "}
              <svg
                fill="white"
               
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="25px"
                height="25px"
              >
                {" "}
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/coincapmarketdata/videos/365220420785166/">
              <svg
                fill="white"
                
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="25px"
                height="25px"
              >
                {" "}
                <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23c12.683,0,23-10.317,23-23S37.683,2,25,2z M32,16h-3.29 C26.772,16,26,16.455,26,17.806V21h6l-1,5h-5v13h-6V26h-3v-5h3v-2.774C20,14.001,21.686,11,26.581,11C29.203,11,32,12,32,12V16z" />
              </svg>
            </a>
          </div>
          <div className={s.column}>
            <div className={s.column_item_header}>COINCAP APP AVAILABLE ON</div>
            <div className={s.column_item_list}>
              {" "}
              <div className={s.column_item_listitem}>
                    <a href='https://play.google.com/store/apps/details?id=io.coinCap.coinCap'>
                        <Image src={appleImage} />
                    </a>
              </div>
              <div className={s.column_item_listitem}>
                    <a href='https://apps.apple.com/us/app/coincap/id1074052280?ign-mpt=uo%3D4'>
                        <Image src={googlImage} />
                    </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
