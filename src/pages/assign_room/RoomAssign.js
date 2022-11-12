import React, { useState } from "react";
import AppliList from "../application_list/appliList";
import { Link, useNavigate,useLocation } from "react-router-dom";
import style from "./roomassign.module.css";
import SideMenu from "../../components/sidemenu/SideMenu";

const RoomAssign = (props) => {
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
      floor: 23,
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
  ]

  const getInitialState = () => {
    const value = 101;
    return value;
  };
  let roomId = null;
  let info = []
  const [value, setValue] = useState(getInitialState);
  const [block, setBlock] = useState("")
  const [floor, setfloor] = useState("")
  const [roomNo, setRoomNo] = useState("")
  const handleChange = (e) => {
    roomId = e.target.value
    setValue(roomId);
    info = roomId.split(":")
    setBlock(info[0])
    setfloor(info[1])
    setRoomNo(info[2])
  };




  const { state } = useLocation()
  const {name,regNo,dept,semester,merit} = state.info
  return (
    <div>
    <SideMenu />
      <div className={style.info_center}>
        <h2>Student Information</h2>
        <div className={style.info}>
          <p>Name: {name}</p>
          <p>Registraion No: {regNo}</p>
          <p>Department : {dept}</p>
          <p> Semester : {semester}</p>
          <p>Merit Position:{merit}</p>
          <p>Amount RecieptNo: 234567dfghj</p>
          <p>Payment Date : 12/11/22</p>
          <p>Expiration date: 12/11/23</p>
        </div>

        
        <h2>Room Assign</h2>
        <div className={style.info}>
        <select value={value} onChange={handleChange}>
          <option selected disabled="true">
            ----Assigned Room----
          </option>
          {roomDetails.map((res) => (
            <option value={res.block + ":"+res.floor +":"+ res.roomNo}>{res.roomNo}</option>
          ))}
        </select>
        
        <p>{`Block : ${block}`}</p>
        <p>{`Floor : ${floor}`}</p>
        <p>{`Room : ${floor}`}</p>
        <p><button><Link to="/for-approval" state={{name: name, regNo:regNo,dept:dept,semester: semester, roomNo :roomNo}}>Forward</Link></button></p>
      </div>
      </div>
    </div>
  );
};

export default RoomAssign;
