import s from './../../../../styles/assetsCoin.module.scss'

export const ButtonGrafic = ({lang,en,ru,action,interval,active,setDay,day}) => {
  function clickHandler(){
    action(interval);
    setDay(day)
  }
  return (
    <button className={` ${s.buttonGrafic} ${active === day && s.active}`} onClick={clickHandler}>
        {lang === 'en' ? <span>{en}</span> : <span>{ru}</span>}
    </button>
  )
}
