import React from "react"
import det1 from './details.json';

function display()
{
  const disp =det1.map(
    (records) => {
     return (
       <tr>
         <td>{records.userid}</td>
         <td>{records.Name}</td>
         <td>{records.project}</td>
         <td>{records.Budget}</td>
       </tr>

      )
    }
  )
return(
  <div>
    <table class = "table table-striped">
    <thead>
      <tr>
        <th>User Id</th>
        <th>User Name</th>
        <th>Project</th>
        <th>Budget</th>
      </tr>
    </thead>
    <tbody>
      {display}
    </tbody>
    </table>
  </div>
)

}

export default display;