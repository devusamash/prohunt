import React from "react";
import "./widgetlg.css";
import dummyavatar from "../../assets/images/dummyavatar.png";

const Button = ({ type }) => {
  return <button className={"widgetLgButton " + type}>{type}</button>;
};

const WidgetLg = () => {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={dummyavatar} className="widgetLgImg" />
            <span className="widgetgName">Aakib Javed</span>
          </td>
          <td className="widgetLgDate">10 Oct 2022</td>
          <td className="widgetLgAmount">$10,00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={dummyavatar} className="widgetLgImg" />
            <span className="widgetgName">Aakib Javed</span>
          </td>
          <td className="widgetLgDate">10 Oct 2022</td>
          <td className="widgetLgAmount">$10,00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={dummyavatar} className="widgetLgImg" />
            <span className="widgetgName">Aakib Javed</span>
          </td>
          <td className="widgetLgDate">10 Oct 2022</td>
          <td className="widgetLgAmount">$10,00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
