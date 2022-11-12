import React from 'react'
import style from '../application_list/appliList.module.css'
import SideMenu from '../../components/sidemenu/SideMenu';
import {FcRight} from 'react-icons/fc'
import { Link, useNavigate } from "react-router-dom";

const Cancelled = () => {
  const applicant = [
    {
      name: "asdfghjk",
      regNo: "2018831029",
      dept: "Swe",
      semester: "5th",
      merit: 10,
      status: "completed",
    },
    {
      name: "asdfghjk",
      regNo: "2018831011",
      dept: "Swe",
      semester: "5th",
      merit: 10,
      status: "completed",
    },
    {
      name: "asdfghjk",
      regNo: "2018831088",
      dept: "Swe",
      semester: "5th",
      merit: 10,
      status: "completed",
    },
    {
      name: "asdfghjk",
      regNo: "2018831111",
      dept: "Swe",
      semester: "5th",
      merit: 10,
      status: "completed",
    },
    {
      name: "asdfghjk",
      regNo: "2016453213",
      dept: "Swe",
      semester: "5th",
      merit: 10,
      status: "completed",
    },
    {
      name: "asdfghjk",
      regNo: "2019837468",
      dept: "Swe",
      semester: "5th",
      merit: 10,
      status: "completed",
    },
    {
      name: "asdfghjk",
      regNo: "20193746381",
      dept: "Swe",
      semester: "5th",
      merit: 10,
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
        <td>
          <Link to = "/for-approval">
            <FcRight size="2em"></FcRight>
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <SideMenu />
      <div className={style.table_wrapper}>
      <h2>Cancelled Student</h2>
      <table className={style.fl_table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>RegNo</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Resend</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
    </div>
  );
}

export default Cancelled