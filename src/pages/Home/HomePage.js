import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomizedTables from "../../componentes/table/table";
import Graph from "../../componentes/table/graph";
import LineChart from "../../componentes/table/chart";
import "./HomePage.css";
import DropDown from "../../componentes/dropdown/dropdown";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [dropdownValue, setDropdownValue] = useState("USD");




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
      <div className="dropdown">
        <DropDown dropdownValue={dropdownValue}  setDropdownValue={setDropdownValue} />
      </div>
      <div className="table-container">
        <div className="table">
          <CustomizedTables dropdownValue={dropdownValue} />
        </div>
        <div className="graph">
          <Graph />
          <LineChart />
        </div>
      </div>
    </>
  );
}
