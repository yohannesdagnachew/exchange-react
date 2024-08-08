import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomizedTables from "../../componentes/table/table";
import Graph from "../../componentes/table/graph";
import LineChart from "../../componentes/table/chart";
import "./HomePage.css";
import DropDown from "../../componentes/dropdown/dropdown";
import BankTable from "../../componentes/table/bankTable";
import Banner from "../../componentes/Ads/banner";
import SocialAds from "../../componentes/Ads/social";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [dropdownValue, setDropdownValue] = useState("USD");
  const [bankData, setBankData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://exchange.football-live-tv.com/exchange/`);
      setBankData(response.data.exchange);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "blue",
          fontSize: "50px",
          padding: "20px",
        }}
      >
        Today's Birr To USD Exachange Rate{" "}
      </h1>
      <div className="banner-ad">
        <Banner />
        <SocialAds />
      </div>
      <div className="dropdown">
        <DropDown
          dropdownValue={dropdownValue}
          setDropdownValue={setDropdownValue}
        />
      </div>
      <div className="table-container">
        <div className="table">
          <CustomizedTables dropdownValue={dropdownValue} />
        </div>
        <div className="graph">
          <Graph />
        </div>
      </div>

      <div className="banks-data">
        {bankData.map((item, index) => {
          return <BankTable key={index + item.name} bank={item} />;
        })}
      </div>
    </>
  );
}
