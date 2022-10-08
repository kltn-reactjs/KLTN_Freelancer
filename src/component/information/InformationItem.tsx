import React from "react";
import "./style.scss";

interface Props {
  logo: any;
  text: string;
  info: string;
}

const InformationItem: React.FC<Props> = (props) => {
  const { logo, text, info } = props;
  return (
    <div className="cardItem">
      <div className="title">
        <img src={logo} />
        <h3>{text}</h3>
      </div>
      <div className="detail">
        <p>{info}</p>
      </div>
    </div>
  );
};

export default InformationItem;
