import React from "react";
import "./home_component.scss";

const data = [
  {
    id: 1,
    logo: "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/amazon_logo2.svg",
  },
  {
    id: 2,
    logo: "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/facebook-corporate-logo2.svg",
  },
  {
    id: 3,
    logo: "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/deloitte-logo2.svg",
  },
  {
    id: 4,
    logo: "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/nasa-logo3.svg",
  },
  {
    id: 5,
    logo: "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/ibm-logo2.svg",
  },
  {
    id: 6,
    logo: "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/airbus-logo2.svg",
  },
  {
    id: 7,
    logo: "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/telstra-logo.svg",
  },
  {
    id: 8,
    logo: "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/fujitsu-logo.svg",
  },
  {
    id: 9,
    logo: "https://www.f-cdn.com/assets/main/en/assets/home/redesign/companies/google-logo.svg",
  },
];

const Sponsors = () => {
  return (
    <div className="container">
      {data.map((item) => (
        <div className="logo">
          <img src={item.logo} />
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
