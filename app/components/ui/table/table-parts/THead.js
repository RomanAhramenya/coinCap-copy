import { translate } from "../../../../assets/helpers/settings";
import s from "./../table.module.scss";

export const THead = ({ arr, language }) => {
  return (
    <thead>
      <tr>
        {arr.map((el) => {
          return <th key={el.id} className={s[el.style]} colSpan={el.colSpan}>
                {translate(language,el.en,el.ru)}
          </th>;
        })}
      </tr>
    </thead>
  );
};
