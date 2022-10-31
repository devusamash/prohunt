import React from "react";
import "./home.css";
import FeaturedInfo from "../../../components/FeaturedInfo/FeaturedInfo";
import Chart from "../../../components/Chart/Chart";
import { userData } from "../../../components/Chart/dummyData";
import WidgetLg from "../../../components/WidgetLg/WidgetLg";
import WidgetSm from "../../../components/WidgetSm/WidgetSm";

const DashboardHome = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default DashboardHome;
