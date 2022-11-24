import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import SideMenu from '../../components/sidemenu/SideMenu';
import { FcPlus} from "react-icons/fc";
import style from "../application_list/appliList.module.css"
const Approved = () => {
  const applicant = [
    {
      name: "Prottya",
      regNo: "2018831029",
      dept: "SWE",
      semester: "7th",
      merit: 110,
      status: "completed",
    },
    {
      name: "Jamil",
      regNo: "2018831011",
      dept: "CSE",
      semester: "5th",
      merit: 1560,
      status: "completed",
    },
    {
      name: "Sejuty",
      regNo: "2018831088",
      dept: "PME",
      semester: "1th",
      merit: 510,
      status: "completed",
    },
    {
      name: "Rafat",
      regNo: "2018831111",
      dept: "EEE",
      semester: "5th",
      merit: 980,
      status: "completed",
    },
    {
      name: "Mahi",
      regNo: "2016453213",
      dept: "IPE",
      semester: "5th",
      merit: 1650,
      status: "completed",
    },
    {
      name: "Jishan",
      regNo: "2019837468",
      dept: "FET",
      semester: "3th",
      merit: 1660,
      status: "completed",
    },
    {
      name: "Fahim",
      regNo: "20193746381",
      dept: "FES",
      semester: "5th",
      merit: 1890,
      status: "completed",
    },
  ];
  
  const DisplayData = applicant.map((info) => {
    return (
      <tr>
        <td>{info.name}</td>
        <td>{info.regNo}</td>
        <td>{info.dept}</td>
        <td>{info.semester}</td>
        <td>{info.merit}</td>
        <td>
          <Link>
            <FcPlus size="2em"></FcPlus>
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <SideMenu />
      <div className={style.table_wrapper}>
      <h2>Approved Applicant</h2>
      <table className={style.fl_table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>RegNo</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Merit</th>
            <th>Check Payment</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
    </div>
  );
};

export default Approved