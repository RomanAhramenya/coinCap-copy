export function translate(lang, en, ru) {
  if (lang === "ru") {
    return ru;
  } else if (lang === "en") {
    return en;
  }
}

function floor(a) {
  if (Number(a) >= 0.01 || Number(a) < 0) {
    return a.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ",");
  }
  return a;
}
function customFixed(num) {
  const a = Number(num);
  if (a > 0.01) return a.toFixed(2);
  if (a > 0.001) return a.toFixed(3);
  if (a > 0.0001) return a.toFixed(4);
  if (a > 0.00001) return a.toFixed(5);
  if (a > 0.000001) return a.toFixed(6);
  if (a > 0.000001) return a.toFixed(7);
  if (a > 0.000001) return a.toFixed(8);
  if (a < 0.00000001) return a.toFixed(9);
}
export function currencyHelper(cur, usd) {
  switch (cur) {
    case "BYR":
      return `Br ${floor(customFixed(Number(usd) * 2.55))}`;
    case "RUB":
      return `₽ ${floor(customFixed(Number(usd) * 55))}`;
    default:
      return `$ ${floor(customFixed(Number(usd)))}`;
  }
}
export function roundUpToB_M_T(num) {
  if (num > 1000000000000) {
    return `${(num / 1000000000000).toFixed(2)}t`;
  }
  if (num > 1000000000) {
    return `${(num / 1000000000).toFixed(2)}b`;
  }
  if (num > 1000000) {
    return `${(num / 1000000).toFixed(2)}m`;
  }
  if (num > 1000) {
    return `${(num / 1000).toFixed(2)}k`;
  }
}
export function roundUpToB_M_T_currency(cur, usd) {
  switch (cur) {
    case "BYR":
      return usd * 2.55;
    case "RUB":
      return usd * 55;
    default:
      return usd;
  }
}
export function changeClassName(num) {
  if (num >= 0) return "change_green";
  if (num < 0) return "change_red";
}

export function MaxMinAver(MaxMinAver, arr, currency) {
  if (MaxMinAver === "max") {
    let max = arr.reduce((acc, curr) =>
      acc.priceUsd > curr.priceUsd ? acc : curr
    );
    return currencyHelper(currency, max.priceUsd);
  }
  if (MaxMinAver === "min") {
    let min = arr.reduce((acc, curr) =>
      acc.priceUsd < curr.priceUsd ? acc : curr
    );
    return currencyHelper(currency, min.priceUsd);
  }
  if (MaxMinAver === "aver") {
    let aver = arr.reduce((a, b) => a + +b.priceUsd, 0) / arr.length;

    return currencyHelper(currency, aver);
  }
}
let MonthRu = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];
let MonthEn = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export function setDate(lang) {
  let now = new Date();
  if (lang === "ru") {
    return `${now.getDate()} ${MonthRu[now.getMonth()]} ${now.getFullYear()}`;
  }
  if (lang === "en") {
    return `${now.getDate()} ${MonthEn[now.getMonth()]} ${now.getFullYear()}`;
  }
}

export function Month(UNIX_timestamp) {
  let date = new Date(UNIX_timestamp);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  let day = date.getDate();
  return `${month} ${day}`;
}
export function Year(UNIX_timestamp) {
  let date = new Date(UNIX_timestamp);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  let year = date.getFullYear();
  return `${month} ${year}`;
}
