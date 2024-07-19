import { useContext } from "react";
import styles from "./Button.module.scss";
import { ThemeContext } from "../../../app/Contexts";

interface IButtonProps {
  text: string;
  callback?: () => void;
  disabled?: boolean;
  submit?: boolean;
}

const Button = ({
  text,
  callback,
  disabled = false,
  submit = false,
}: IButtonProps) => {
  const theme = useContext(ThemeContext);
  console.log(theme);

  return (
    <button
      className={[styles.button, theme == "light" ? styles.light : ""].join(
        " ",
      )}
      type={submit ? "submit" : "button"}
      onClick={callback}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
