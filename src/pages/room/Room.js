import React from 'react'
import style from "../../pages//application_list/appliList.module.css"
import SideMenu from '../../components/sidemenu/SideMenu.js';

const Room = () => {
    const roomDetails = [
        {
          id: 1,
          roomNo: 101,
          block: "A",
          floor: 1,
          capacity: 4,
          residintNo: 2,
        },
        {
          id: 2,
          roomNo: 201,
          block: "B",
          floor: 2,
          capacity: 4,
          residintNo: 2,
        },
        {
          id: 2,
          roomNo: 301,
          block: "A",
          floor: 3,
          capacity: 4,
          residintNo: 2,
        },
        {
          id: 3,
          roomNo: 401,
          block: "C",
          floor: 4,
          capacity: 4,
          residintNo: 2,
        },
        {
          id: 4,
          roomNo: 202,
          block: "D",
          floor: 2,
          capacity: 4,
          residintNo: 2,
        },
        {
          id: 5,
          roomNo: 102,
          block: "A",
          floor: 1,
          capacity: 4,
          residintNo: 2,
        },
      ];
      
      const DisplayData = roomDetails.map((info) => {
        return (
          <tr>
            <td>{info.id}</td>
            <td>{info.roomNo}</td>
            <td>{info.block}</td>
            <td>{info.floor}</td>
            <td>{info.capacity}</td>
            <td>{info.residintNo}</td>
          </tr>
        );
      });
      return (
        <div>
            <SideMenu/>
            <div className={style.table_wrapper}>
          <h2>Room Details</h2>
          <table className={style.fl_table}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Room NO</th>
                <th>Block</th>
                <th>Floor</th>
                <th>Capacity Date</th>
                <th>Resident Number</th>
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
        </div>
      );
}

export default Room