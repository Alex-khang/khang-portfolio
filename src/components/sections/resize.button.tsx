import React from "react";

interface IProps {
  btnText?: string;
  btnIcons?: React.ReactNode; //tượng chưng cho component
  btnStyle?: React.CSSProperties; // tượng chưng có css
  onclick?: () => void;
}
const ResizeButton = (props: IProps) => {
  const { btnText, btnIcons, btnStyle, onclick } = props;

  return (
    <button onClick={onclick} className="resize-button" style={btnStyle}>
      <span style={{ textTransform: "uppercase" }}>{btnText}</span>
      <>{btnIcons}</>
    </button>
  );
};

export default ResizeButton;
