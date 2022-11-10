import React from 'react'
import AppliList from '../application_list/appliList'
import { useLocation } from "react-router-dom";

const RoomAssign = (props) => {
   // const {name, reg,dept,semester,merit} = props.info
    // console.log(props.state)
 
//     const { state } = useLocation()
// console.log(useLocation()) 
  return (
    
    <div>
        RoomAsign
        <div>
            <p>Name: name</p>
            <p>Registraion No: 2018831029</p>
            <p>Department : Software Engineering</p>
            <p>Merit Position:810</p>

        </div>
    </div>
  )
}

export default RoomAssign