import React, { useState } from "react";
import styles from "./issue_list.module.css";
import SideMenu from "../../components/sidemenu/SideMenu";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function IssueList() {
  
  // a list of issues
  const issues = [
    {
      id: 1,
      roomNo: 101,
      regNo: "18BCE1234",
      issueDate: "2021-01-01",
      description:
        "Need a filter",
      status: "pending",
      action:
        ""
    },
    {
      id: 2,
      roomNo: 102,
      regNo: "2018831090",
      issueDate: "2021-01-02",
      description:
        "Broken Table.",
      status: "completed",
      action:
        "Table has been fixed.",
    },
    {
      id: 3,
      roomNo: 103,
      regNo: "201662176",
      issueDate: "2021-01-03",
      description:
        "Need a filter",
      status: "pending",
      action:
        " ",
    },
    {
      id: 4,
      roomNo: 104,
      regNo: "2018863326",
      issueDate: "2021-01-04",
      description:
        "Bathroom door is broken",
      status: "pending",
      action:
        "",
    },
    {
      id: 5,
      roomNo: 105,
      regNo: "18BCE1238",
      issueDate: "2021-01-05",
      description:
        "Room door broken",
      status: "working",
      action:
        "note has been issued.",
    },
    {
      id: 6,
      roomNo: 106,
      regNo: "2018831876",
      issueDate: "2021-01-06",
      description:
        "Baranda bulb broken.",
      status: "completed",
      action:
        "Bulb has been fixed.",
    },
    {
      id: 7,
      roomNo: 107,
      regNo: "2019986378",
      issueDate: "2021-01-07",
      description:
        "Door is broken.",
      status: "pending",
      action:
        "notes has been issed",
    },
  ];
  const {state} = useLocation()
  console.log(state)
  const[status,setStatus] = useState("");

  return (
    <div className={styles.flex_container}>
      <SideMenu />
      <h1>Issue List</h1>
      <h5>Problems faced by the students.</h5>
      <h4>Sort by: Id/room/</h4>
      <table className={styles.table_wrapper}>
        <thead>
          <tr>
            <th>Room No</th>
            <th>Reg No</th>
            <th>Issue Date</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.roomNo}</td>
              <td>{issue.regNo}</td>
              <td>{issue.issueDate}</td>
              <td>{issue.description}</td>
              <td
                className={
                  issue.status === "working"
                    ? styles.working
                    : issue.status === "completed"
                    ? styles.completed
                    : styles.pending
                }
              >
                <Link style={{ textDecoration: 'none', color: 'black' }} 
                to={
                    issue.status==="pending"
                    ?"/pending/create-note"
                    : issue.status === "completed"
                    ?"/completed/view-note"
                    :"/create-view-note"
                    } state = {{id:issue.id, regNo:issue.regNo, date: issue.issueDate,des :issue.description, roomNo:issue.roomNo}}>
                 {issue.status}
                </Link>
              </td>
              <td>{issue.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 

