import "./styles.css";

type Props = {
  text: string;
}

function Button({text}: Props) {
  return <div className="dsc-btn">{text}</div>;
}

export default Button;
