import React from 'react'

export default function Issue() {
    return (
        // create a form with input fields containing  `RoomNo`, `RegNo`, `Issue_date`, `Description`,
        // `Status` and `Action` fields
        // `Status` and `Action` fields should be disabled
        // `Status` field should be set to `Pending` by default
        // `Action` field should be set to `Not yet resolved` by default
        // `Issue_date` field should be set to current date by default
        // `RoomNo` and `RegNo` fields should be set to the values of the `RoomNo` and `RegNo` of the logged in user
        // `RoomNo` and `RegNo` fields should be disabled
        // `Description` field should be a textarea
        // `Submit` button should be disabled if any of the fields are empty
        // `Submit` button should be enabled if all the fields are filled
        // `Submit` button should be disabled if the `Status` field is not `Pending`
        // `Submit` button should be disabled if the `Action` field is not `Not yet resolved`
        // `Submit` button should be disabled if the `Issue_date` field is not the current date
        // `Submit` button should be disabled if the `RoomNo` field is not the `RoomNo` of the logged in user
        // `Submit` button should be disabled if the `RegNo` field is not the `RegNo` of the logged in user

        <>
            <h1>Issue</h1>
            <form>
                <label htmlFor="RoomNo">Room No:</label>
                <input type="text" id="RoomNo" placeholder="Room No" disabled />
                <label htmlFor="RegNo">Reg No:</label>
                <input type="text" id="RegNo" placeholder="Reg No" disabled />
                <label htmlFor="Issue_date">Issue Date:</label>
                <input type="date" id="Issue_date" disabled />
                <label htmlFor="Description">Description:</label>
                <textarea id="Description" placeholder="Description"></textarea>
                <label htmlFor="Status">Status:</label>
                <input type="text" id="Status" placeholder="Status" disabled />
                <label htmlFor="Action">Action:</label>
                <input type="text" id="Action" placeholder="Action" disabled />
                <button type="submit" disabled>Submit</button>
            </form>

        </>
    )
}
