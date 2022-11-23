import React from 'react'
import style from "../application_list/appliList.module.css"
import SideMenu from '../../components/sidemenu/SideMenu';
import { FcCancel,FcOk } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { CiCircleMore } from "react-icons/ci";

const Resident = () => {
    const resident = [
        {
          name: "asdfghjk",
          regNo: "2018831029",
          dept: "Swe",
          roomNo: "5th",
          admission_date: "12/12/21",
          expire_date: "12/12/22",
          studentship_expiration:"12/12/23"
        },
        
      ];
      
      const DisplayData = resident.map((info) => {
        console.log(info)
        return (
          <tr>
            <td>{info.name}</td>
            <td>{info.regNo}</td>
            <td>{info.dept}</td>
            <td>{info.roomNo}</td>
            <td>{info.admission_date}</td>
            <td>{info.expire_date}</td>
            <td>{info.studentship_expiration} <Link to="/delete-resident"><CiCircleMore></CiCircleMore></Link></td>
          </tr>
        );
      });
      return (
        <div>
            <SideMenu/>
            <div className={style.table_wrapper}>
          <h2>Resident List</h2>
          <table className={style.fl_table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>RegNo</th>
                <th>Department</th>
                <th>RoomNo</th>
                <th>Admission</th>
                <th>Expiration</th>
                <th>Studentship Expiration</th>
                
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
        </div>
      );
    };


export default Resident