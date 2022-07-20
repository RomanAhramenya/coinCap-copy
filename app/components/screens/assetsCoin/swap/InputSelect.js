import Image from "next/image";
import { translate } from "../../../../assets/helpers/settings";
import s from "./../../../../../styles/swap.module.scss";
const InputSelect = ({disabled,value, setValue, en, ru , image,showHandler,language}) => {
  function changeHandler(e) {
    setValue(e.target.value);
  }
  return (
    <div className={s.swap_content_top}>
      <div>
        <label>{translate(language, en, ru)}</label>
      </div>
      <div className={s.operation}>
        <input min="0"
        disabled={disabled}
          value={value}
          onChange={(e) => changeHandler(e)}
          type="number"
          placeholder="0"
        />
        <button style={{cursor:'pointer'}} onClick={() => showHandler(true)}>
          {image ? (
            <div className={s.operation_image}>
              <Image
                width={26}
                height={26}
                src={`https://assets.coincap.io/assets/icons/${image.toLowerCase()}@2x.png`}
                alt={image}
              />
            </div>
          ) : (
            <span>{translate(language,"Select a token" , "Выберите токен")} </span>     
          )}

          <span>{image.toUpperCase()} &#9660;</span>
        </button>
      </div>
    </div>
  );
};

export default InputSelect;
