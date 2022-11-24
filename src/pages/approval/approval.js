import React, { useContext, useState } from "react";
import style from "../application_list/appliList.module.css"
import SideMenu from "../../components/sidemenu/SideMenu";
import { CiCircleMore } from "react-icons/ci";
import { FcCancel,FcOk } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
const Approval = () => {
    const applicant = [
        {
          name: "Rodoshi",
          regNo: "2018831029",
          dept: "SWE",
          semester: "5th",
          merit: 10,
          status: "completed",
        },
        {
          name: "Suhaib",
          regNo: "2018831011",
          dept: "CSE",
          semester: "7th",
          merit: 111,
          status: "completed",
        },
        {
          name: "Sourav",
          regNo: "2018831088",
          dept: "EEE",
          semester: "5th",
          merit: 145,
          status: "completed",
        },
        {
          name: "Efto",
          regNo: "2018831111",
          dept: "SWE",
          semester: "1th",
          merit: 1450,
          status: "completed",
        },
        {
          name: "Zubayer",
          regNo: "2016453213",
          dept: "CSE",
          semester: "5th",
          merit: 160,
          status: "completed",
        },
        {
          name: "Siam",
          regNo: "2019837468",
          dept: "ARC",
          semester: "9th",
          merit: 30,
          status: "completed",
        },
        {
          name: "Abid",
          regNo: "20193746381",
          dept: "SWE",
          semester: "3th",
          merit: 1975,
          status: "completed",
        },
      ];
      
      const DisplayData = applicant.map((info) => {
        console.log(info)
        return (
          <tr>
            <td>{info.name}</td>
            <td>{info.regNo}</td>
            <td>{info.dept}</td>
            <td>{info.semester}  <Link to="/approval-detail"><CiCircleMore ></CiCircleMore></Link></td>
            <td>
            <Link><FcOk size = "2em"></FcOk></Link>
            </td>
            <td><Link><FcCancel size = "2em"></FcCancel></Link></td>
          </tr>
        );
      });
      return (
        <div>
          <SideMenu />
          <div className={style.table_wrapper}>
          <h2>Students to Approve List</h2>
          <table className={style.fl_table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>RegNo</th>
                <th>Department</th>
                <th>Semester</th>
                <th>Accept</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
        </div>
      );
}

export default Approval