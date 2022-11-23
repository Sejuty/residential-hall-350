import React, { useState, useEffect } from "react";
import style from "../../pages//application_list/appliList.module.css";
import SideMenu from "../../components/sidemenu/SideMenu.js";
import useSortableData from "../../components/sortTable/useSortableData";
import RoomDetails from "../../components/json/room.json";
import Axios from "axios";

const Room = () => {
  const [users, setUsers] = useState([]);
  const roomDetails = users;
  const { items, requestSort } = useSortableData(roomDetails);

  try {
    const getRoom = async () => {
      const res = await Axios.get(
        "http://localhost:1111/api/v1/authority/rooms/getSorted",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      const data = await res.data;
      setUsers(data.data);
    };
    useEffect(() => {
      getRoom();
    }, []);
  } catch (err) {
    console.log(err);
  }

  const DisplayData = items.map((info) => {
    return (
      <tr>
        <td>{info.RoomNo}</td>
        <td>{info.Block}</td>
        <td>{info.Floor}</td>
        <td>{info.Capacity}</td>
        <td>{info.Resident_number}</td>
      </tr>
    );
  });
  return (
    <div>
      <SideMenu />
      <div className={style.table_wrapper}>
        <h2>Room Details</h2>
        <table className={style.fl_table}>
          <thead>
            <tr>
              <th onClick={() => requestSort("roomNo")}>Room NO</th>
              <th onClick={() => requestSort("block")}>Block</th>
              <th onClick={() => requestSort("floor")}>Floor</th>
              <th onClick={() => requestSort("capacity")}>Capacity</th>
              <th onClick={() => requestSort("residintNo")}>Resident Number</th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Room;
