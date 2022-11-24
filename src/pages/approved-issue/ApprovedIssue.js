import React from "react";
import SideMenu from "../../components/sidemenu/SideMenu";
import style from "../application_list/appliList.module.css"
import { Link, useNavigate } from "react-router-dom";
import { FcPlus} from "react-icons/fc";

const ApprovedIssue = () => {
     const issues = [
      {
        id: 1,
        roomNo: 101,
        regNo: "2018831026",
        issueDate: "2021-01-01",
        description:"Need a filter",
        status: "pending",
        action:""
      },
      {
        id: 2,
        roomNo: 102,
        regNo: "2018831090",
        issueDate: "2021-01-02",
        description:"Broken Table.",
        status: "completed",
        action:"Table has been fixed.",
      },
      {
        id: 3,
        roomNo: 103,
        regNo: "201662176",
        issueDate: "2021-01-03",
        description:"Need a filter",
        status: "pending",
        action:" ",
      },
      {
        id: 4,
        roomNo: 104,
        regNo: "2018863326",
        issueDate: "2021-01-04",
        description:"Bathroom door is broken",
        status: "pending",
        action:"",
      },
      {
        id: 5,
        roomNo: 105,
        regNo: "2018337045",
        issueDate: "2021-01-05",
        description:"Room door broken",
        status: "working",
        action:"note has been issued.",
      },
      {
        id: 6,
        roomNo: 106,
        regNo: "2018831876",
        issueDate: "2021-01-06",
        description:"Baranda bulb broken.",
        status: "completed",
        action:"Bulb has been fixed.",
      },
      {
        id: 7,
        roomNo: 107,
        regNo: "2019986378",
        issueDate: "2021-01-07",
        description:"Door is broken.",
        status: "pending",
        action:"notes has been issed",
      },
    ];

  const DisplayData = issues.map((info) => {
    return (
      <tr>
        <td>{info.roomNo}</td>
        <td>{info.regNo}</td>
        <td>{info.issueDate}</td>
        <td>
          <Link to="/expense">
           expenses
          </Link>
        </td>
        <td>
          <Link to="/expense">
           reciept
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <SideMenu />
      <div className={style.table_wrapper}>
        <h2>Approved Issue</h2>
        <table className={style.fl_table}>
          <thead>
            <tr>
              <th>RoomNo</th>
              <th>RegNo</th>
              <th>issueDate</th>
              <th>Expenses</th>
              <th>Reciept</th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </table>
      </div>
    </div>
  );
};
export default ApprovedIssue;
