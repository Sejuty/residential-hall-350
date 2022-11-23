import React, { useState } from 'react'
import style from "../application_list/appliList.module.css"
import SideMenu from '../../components/sidemenu/SideMenu';

const User = () => {
    const items=[{
  "name": "Worden Lassells",
  "email": "wlassells0@topsy.com"
}, {
  "name": "Bordie McArte",
  "email": "bmcarte1@theguardian.com"
}, {
  "name": "Marci Siaskowski",
  "email": "msiaskowski2@jiathis.com"
}, {
  "name": "Maude Philippe",
  "email": "mphilippe3@theguardian.com"
}, {
  "name": "Sammy Shilliday",
  "email": "sshilliday4@google.fr"
}, {
  "name": "Addia Aprahamian",
  "email": "aaprahamian5@washingtonpost.com"
}, {
  "name": "Sephira Dongles",
  "email": "sdongles6@ask.com"
}, {
  "name": "Daria Gleasane",
  "email": "dgleasane7@mit.edu"
}, {
  "name": "Chiarra Bagger",
  "email": "cbagger8@cocolog-nifty.com"
}, {
  "name": "Vivianna Codd",
  "email": "vcodd9@a8.net"
}]

    const DisplayData = items.map((info) => {
        return (
          <tr>
            <td>{info.name}</td>
            <td>{info.email}</td>
           
            <td>
            <select name = "role" >
                <option value= "student">Student</option>
                <option value= "provest">Provost</option>
                <option value= "staff">Staff</option>
                <option value= "none">None</option>
            </select>
            </td>
          </tr>
        );
      });
      return (
        <div>
          <SideMenu />
          <div className={style.table_wrapper}>
          <h2>Applicant List</h2>
          <table className={style.fl_table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role Assign</th>
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
        </div>
      );
    };
    

export default User