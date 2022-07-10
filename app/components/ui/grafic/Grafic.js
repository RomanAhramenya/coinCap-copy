import { useDispatch, useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import s from './../../../../styles/grafic.module.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useEffect, useState } from "react";
import { getHistory } from "../../../store/slice/getCoinsAction";
import Image from "next/image";
import { changeClassName, MaxMinAver, Month, setDate, Year } from "../../../assets/helpers/settings";
import { changeArray } from "../../../store/slice/getCoinsSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  
);
export const Grafic = ({ el, interval , day }) => {
  console.log(el)
  const {id} = el
  const dispatch = useDispatch();
  const history = useSelector((state) => state.coins.history);
  const settings = useSelector(state => state.settings)
  useEffect(() => {
    dispatch(getHistory({ id, interval,day }));
  }, [day]);
  const labels = [];

  const dataPrice = [];

  if (history.data[id]) {
    history.data[id].map((el) => {
      switch (day) {
        case "h1":
          
          labels.push(el.date.slice(11, -8));
          break;
          case "w1":
            labels.push(el.date.slice(5, -14));
            break;
        case "d1":
          labels.push(Month(el.time));
          break;
          case "m3":
            labels.push(Month(el.time));
            break;
            case "m6":
              labels.push(Month(el.time));
              break;
              case "1y":
                labels.push(Year(el.time));
                break;
        default:
          break;
      }
    });
    history.data[id].map((el) => {
      if(settings.currency === 'BYR') {
      return  dataPrice.push(Number(el.priceUsd * 2.55))
      }
      if(settings.currency === 'RUB') {
        return  dataPrice.push(Number(el.priceUsd * 55))
        }
      return dataPrice.push(Number(el.priceUsd))
    });
  }
  const dataCharts = {
    labels: labels,
    datasets: [
      {
        label: "PRICE",
        data: dataPrice,
        fill: true,
        backgroundColor:
        history.data[id] && 
          history.data[id][0].priceUsd <
          history.data[id][history.data[id].length - 1].priceUsd
            ? "rgba(24, 198, 131,0.2)"
            : "rgba(254, 0, 0,0.3)",
        borderColor:
        history.data[id] &&
          history.data[id][0].priceUsd <
          history.data[id][history.data[id].length - 1].priceUsd
            ? "rgb(24, 198, 131)"
            : "rgb(254, 0, 0)",
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio:false,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
      },
      y: {
        type: "linear",
        display: true,
        position: "right",
      },
    },
    plugins: {
      tooltip: {
        intersect: false,
      },
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 1,
        pointStyle: "line",
      },
      line: {
        borderWidth: 3,
      },
    },
  };
  return (
    <div className={settings.isThemeDark ? s.containerDark : s.container}>

       <div className={s.info}>

        <div className={s.info_name}>
          <div className={s.img}>
            <Image width={60} height={60}  src={`https://assets.coincap.io/assets/icons/${el.symbol.toLowerCase()}@2x.png`} alt={el.name}/>
          </div>
          <div>
          <h3>
            {el.name}({el.symbol})
          </h3>
          <h5>{setDate(settings.language)}</h5>
          </div>
          
        </div>

        <div className={s.info_stat}>

          <div className={s.info_stat_1}>
            <div>
              <h4>HIGH</h4> <span>{history.data[id] && MaxMinAver('max',history.data[id],settings.currency)}</span>
            </div>
            <div>
              <h4>LOW</h4> <span>{history.data[id] &&  MaxMinAver('min',history.data[id],settings.currency)}</span>
            </div>
          </div>

          <div className={s.info_stat_2}>
            <div>
              <h4>AVERAGE</h4> <span>{history.data[id] &&  MaxMinAver('aver',history.data[id],settings.currency)}</span>
            </div>
            <div>
              <h4>CHANGE</h4> <span className={ changeClassName(el.changePercent24Hr) }>{Number(el.changePercent24Hr).toFixed(2)} %</span>
            </div>
          </div>

        </div>

       </div>

       <div style={{width:'95%', height:'350px',margin:'0 auto'}}>
          {history.data &&  <Line data={dataCharts} options={options} />}
       </div>
       
       
    </div>
  );
};
