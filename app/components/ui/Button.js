import Image from "next/image";
import loader from "./../../assets/image/loader.gif";
import { useSelector } from "react-redux";
import { translate } from "../../assets/helpers/settings";
import s from "./../../../styles/button.module.scss";
export const Button = ({ en, ru, action, isLoading = false ,disabled=false}) => {
  const language = useSelector((state) => state.settings.language);
  console.log(disabled)
  return (
    <div className={s.container}>
      {isLoading ? (
        <button>
          <Image width={20} height={20} src={loader} alt={"loading"} />
        </button>
      ) : (
        <button className={disabled ? s.disabled : ''} disabled={disabled} onClick={() => action && action()}>{translate(language, en, ru)}</button>
      )}
    </div>
  );
};
