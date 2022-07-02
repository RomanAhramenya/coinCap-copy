import { translate } from '../../../assets/helpers/settings'
import s from './../../../../styles/mainStatisticsHeader.module.scss'

const MainStatisticsHeaderItem = ({lan,worldEn,WorldRu,val}) => {
  return (
    <div className={s.item}>
     <div>
        {translate(lan,worldEn,WorldRu)} 
     </div> 
    <div className={s.item_value}>
        {val}
    </div>
    </div>
  )
}

export default MainStatisticsHeaderItem
