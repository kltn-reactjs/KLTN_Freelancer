import React from "react";
import PostJob from "../../images/post-a-project.png";
import InformationItem from "./InformationItem";
import "./style.scss";

interface Props {
  id: number;
  title: string;
  card: {
    id: number;
    logo: any;
    text: string;
    info: string;
  }[];
}

const InformationContainer: React.FC<Props> = (props) => {
  const { id, title, card } = props;
  return (
    <div className="cardContainer">
      <h2>{title}</h2>
      <div className="listCard">
        {card.map((item) => (
          <InformationItem
            key={item.id}
            logo={item.logo}
            text={item.text}
            info={item.info}
          />
        ))}
      </div>
    </div>
  );
};

export default InformationContainer;
