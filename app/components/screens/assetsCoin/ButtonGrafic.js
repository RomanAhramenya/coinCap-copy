import s from './../../../../styles/assetsCoin.module.scss'

export const ButtonGrafic = ({lang,en,ru,action,interval,active}) => {
  return (
    <button className={` ${s.buttonGrafic} ${active === interval && s.active}`} onClick={()=>action(interval)}>
        {lang === 'en' ? <span>{en}</span> : <span>{ru}</span>}
    </button>
  )
}
