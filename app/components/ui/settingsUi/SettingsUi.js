import Image from "next/image";
import { useDispatch } from "react-redux";
import { setIsSetting } from "../../../store/slice/settingsSlice";
import s from "./../../../../styles/LayoutHeader.module.scss";
import settingsImg from "./../../../assets/image/settings.png";
import settingsImgBlack from "./../../../assets/image/settingsBlack.png";
const SettingsUi = ({settings}) => {
  const dispatch = useDispatch()
  const setSetting = () => {
    dispatch(setIsSetting(true))
    document.getElementsByTagName('body')[0].classList.add('hidden')
  }
  return <div onClick={setSetting} className={s.menu_item}>
    <Image src={settings ? settingsImgBlack : settingsImg} alt='settings'/>
  </div>;
};

export default SettingsUi;
